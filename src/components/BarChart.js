import React, {useState, useEffect, useReducer} from "react";
import axios from "axios"
import { MenuDept } from "./MenuDept";
import styled from "styled-components";
import moment from "moment-timezone" //cad kalau tanpa timeapi

export default function BarChart(){
  const [posts, setPosts] = useState([])
  const [total, setTotal] = useState([])
  const [time, setTime] = useState([])

  //Get Data
  useEffect(() => {    
      axios
        .get('https://kpuftugm.id/status')
        .then(res => {
          //console.log(res)
          console.log("1")
          setPosts(res.data)
        })
        .catch(err => {
          //console.log(err)
        })
  }, [])

  useEffect(() => {    
    const intervalId = setInterval(() => {
      axios
        .get('https://kpuftugm.id/status')
        .then(res => {
          //console.log(res)
          console.log("repeat")
          setPosts(res.data)
        })
        .catch(err => {
          //console.log(err)
        })
      }, 60000 * 10) //every 10 minutes
    return () => clearInterval(intervalId);
  }, [])

  //Get Total Data
  useEffect(() => {    
      axios
        .get('https://kpuftugm.id/allstatus')
        .then(res => {
          //console.log(res)
          setTotal(res.data)
        })
        .catch(err => {
          //console.log(err)
        })
  }, [])

  useEffect(() => {    
    const intervalId = setInterval(() => {
      axios
        .get('https://kpuftugm.id/allstatus')
        .then(res => {
          //console.log(res)
          setTotal(res.data)
        })
        .catch(err => {
          //console.log(err)
        })
      }, 60000 * 10) //every second
    return () => clearInterval(intervalId);
  }, [])
  var totaldata = total.count
  var totalpercent = `${Number((totaldata / 6075) * 100).toFixed(1)}%`

  //Get Time
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get('https://kpuftugm.id/timeinfo.php')
      .then(res => {
        //console.log(res)
        setTime(res.data)
      })
      .catch(err => {
        //console.log(err)
      })
    }, 1000) //every second
    return () => clearInterval(intervalId);
  }, [])
  var seconds = time

  //Get Time tanpa api
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(moment().unix())
  //   }, 1000) 
  //   return () => clearInterval(intervalId);
  // }, [])
  // var seconds = time

  //Merge Data
  const DataComb = MenuDept.map(item => ({
    ...item,
    ...posts.find(item2 => item2.departemen === item.departemen)
  }));

  const Data = DataComb.map(dat => ({
    ...dat,
    height: `${Number((dat.count / dat.student) * 100).toFixed(1)}%`
  }))

  //Display //29 Nov 2021 = 1638118800 //600 delay 10 menit biar dibuka di 00.10 //25 nov u coba = 1637798400
  const Bar=()=>{
    if (seconds < (1638118800 + 600) || seconds == undefined){
      return (<></>)
    }
    else{
      return(
        <Container>
          <h2 className="live-judul"><a className="live">Live</a> Persentase Jumlah Pemilih</h2>
          <div className="box text-center">
            {Data.map(data => (
              <li key={data.departemen}>
                <div className="dept"><p>{data.departemen}</p></div>
                <div className="bar">
                  <div className="barlevel" style={{height: data.height}}></div>
                </div>
                <div className="persen"><p>{data.height} ({data.count})</p></div>
              </li>
            ))}
          </div>
          <div className="total text-center">
            <div className="bartotal">
              <div className="totalname"><p>Total</p></div>
              <div className="totalpercent"><p>{totalpercent} ({totaldata})</p></div>
              <div className="totallevel" style={{width: totalpercent}}></div>
            </div>
          </div>
        </Container>
      )
    }
  }

  return(
    <Bar/>
  )
}

const Container = styled.div`
.live{
    background-color: var(--color-pink);
    border-radius: 1vmin;
    padding: 0 1vmin;
}
.live-judul{
    font-weight: bolder;
}
li {
  list-style: none
}
.box, .total{
  width: 90%;
  margin: auto;
}
.total{
  margin: 1vmin auto 10vmin auto;
}
.total .bartotal{
  display: grid;
  grid-template-columns: 12.5% 12.5% auto ;
  width: 98.5%;
  border: 2px solid;
  margin: auto;
}
.total .bartotal .totalname{
  border-right: 2px var(--color-white) solid;
  background-color: var(--color-green);
}
.total .bartotal .totalpercent{
  background-color: var(--color-pink);
}
.total .totallevel{
  border: 1px var(--color-pink) solid;
  background-color: var(--color-pink);
}
.box {
  display: grid;
  grid-template-columns : repeat(8, 12.5%);
  padding: 5vmin 0 0 0;
}
.bar {
  position: relative;
  height: 40vmin;
  border: 2px var(--color-white);
  border-style: none solid;
}
.bar, .dept, .persen{
  width: 90%;
  margin: auto;
}
.dept{
  overflow: hidden;
  border: 2px var(--color-white) solid;
  background-color: var(--color-green);
}
.barlevel {
  position: absolute;
  border: 1px var(--color-pink) solid;
  background-color: var(--color-pink);
  width: 100%;
  bottom: 0;
}
.persen{
  background-color: var(--color-pink);
  border: 2px var(--color-white);
  border-style: none solid solid;
}

@media (min-width: 1025px) {
  .box, .total{
    width: 60%;
  }
  .bar, .dept, .persen {
    width: 80%;
  }
  .total .bartotal{
    grid-template-columns: 10% 12.5% auto ;
    width: 97.5%;
  }
}
`