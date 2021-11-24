import React, {useState, useEffect, useReducer} from "react";
import axios from "axios"
import { MenuDept } from "./MenuDept";
import styled from "styled-components";
import Select from "rc-select";

export default function BarChart(){
  const [posts, setPosts] = useState([])
  const [time, setTime] = useState([])

  //Get Data
  useEffect(() => {    
    const intervalId = setInterval(() => {
      axios
        .get('https://kpuftugm.tryitout21.online/status')
        .then(res => {
          //console.log(res)
          setPosts(res.data)
        })
        .catch(err => {
          //console.log(err)
        })
      
      }, 10000 * 5) //minutes
    return () => clearInterval(intervalId);
  }, [])

  //Get Time
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
      .then(res => {
        //console.log(res)
        setTime(res.data)
      })
      .catch(err => {
       // console.log(err)
      })
    }, 10000 * 5) //minutes
    return () => clearInterval(intervalId);
  }, [])
  var seconds = time.unixtime

  //Merge Data
  const DataComb = MenuDept.map(item => ({
    ...item,
    ...posts.find(item2 => item2.departemen === item.departemen)
  }));

  const Data = DataComb.map(dat => ({
    ...dat,
    height: `${Number((dat.count / dat.student) * 100).toFixed(1)}%`
  }))

  //Display //Sementara ditampilkan dulu
  const Bar=()=>{
    if (seconds < 1637671487 || seconds==undefined){
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
.box {
  display: grid;
  width: 90%;
  grid-template-columns : repeat(8, 12.5%);
  padding: 5vmin 0;
  margin: auto;
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
@media (min-width: 961px) {
  .box {
    width: 60%;
  }
  .bar, .dept, .persen {
    width: 80%;
  }
}
`