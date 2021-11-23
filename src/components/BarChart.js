import React, {useState, useEffect, useReducer} from "react";
import axios from "axios"
import { MenuDept } from "./MenuDept";
import styled from "styled-components";
import Select from "rc-select";

export default function BarChart(){
  const [posts, setPosts] = useState([])

  useEffect(() => {    
    axios
      .get('https://kpuftugm.padzcraft.xyz/status')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

  //student: MenuDept.filter(adr => adr.departemen == post.departemen) 

  const DataComb = MenuDept.map(item => ({
    ...item,
    ...posts.find(item2 => item2.departemen === item.departemen)
  }));

  const Data = DataComb.map(dat => ({
    ...dat,
    height: `${(dat.count / dat.student) * 100}%`
  }))

  console.log(Data)

  return(
    <Container>
      <div className="box">
        {Data.map(data => (
          <li key={data.departemen}>
            <div className="bar">
              <div className="barlevel" style={{height: data.height}}> </div>
            </div>
            <div> {data.departemen} </div>
          </li>
        ))}
      </div>
    </Container>
  )
}

const Container = styled.div`
li {
  list-style: none
}

.box {
  display: grid;
  grid-template-columns : repeat(8, auto);
  grid-column-gap: 5vmin;
  width: 50%;
  margin: auto;
}

.bar {
  position: relative;
  height: 30vmin;
  border: 1px pink solid;
}

.barlevel {
  position: absolute;
  border: 1px solid;
  width: 100%;
  background-color: var(--color-pink);
  bottom: 0;
}
`
