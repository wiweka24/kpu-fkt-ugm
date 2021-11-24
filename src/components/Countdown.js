import React, {useState, useEffect} from "react";
import Button from "./Button";
import moment from "moment-timezone";
import axios from "axios";

export default function Timerdown(){
  const [posts, setPosts] = useState([])
  
  //Get Time
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get('https://worldtimeapi.org/api/timezone/Asia/Jakarta')
      .then(res => {
        //console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
       // console.log(err)
      })
    }, 1000) 
    return () => clearInterval(intervalId);
  }, [])

  //Get Time
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPosts(moment().unix())
  //   }, 1000) 
  //   return () => clearInterval(intervalId);
  // }, [])
  
  var seconds = 1638118800 - (posts.unix())

  //Convert
  var Hari = Math.floor(seconds / (3600*24))
  var Jam = Math.floor(seconds % (3600*24) / 3600)
  var Menit = Math.floor(seconds % 3600 / 60)
  var Detik = Math.floor(seconds % 60)

  //Display
  const Timeleft=()=>{
    if (seconds > 0){
      return(
        <div className="cd">
          <p>{Hari}<br/>Hari</p>
          <p>{Jam}<br/>Jam</p>
          <p>{Menit}<br/>Menit</p>
          <p className="last">{Detik}<br/>Detik</p>
        </div>
      )
    } else {
      if ((seconds+345600) >= 0) {
        return (
          <div>
            <Button>
              <a href={process.env.PUBLIC_URL + "vote.html"} >Vote Sekarang</a>
            </Button>
          </div>
        )
      } else {
        return (
          <div>
            <h3 className="endvote">Vote Ditutup</h3>
          </div>
        );
      }
    }
  }

  return(
    <Timeleft/>
  );
}