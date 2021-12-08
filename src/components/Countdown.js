import React, {useState, useEffect} from "react";
import Button from "./Button";
import axios from "axios";
import moment from "moment-timezone"; //cafaangan kalau tanpa timeapi

export default function Timerdown(){
  const [posts, setPosts] = useState([])
  
  //Get Time
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
      .get('https://kpuftugm.id/timeinfo.php')
      .then(res => {
        //console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        //console.log(err)
      })
    }, 1000) //every 1 sec
    return () => clearInterval(intervalId);
  }, [])
  //9 Des 2021 = 1638982800 //8 Des 2021 = 1638921600
  var seconds = 1638921600 - posts

  //Get Time tanpa api
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setPosts(moment().unix())
  //   }, 1000) 
  //   return () => clearInterval(intervalId);
  // }, [])

  //Convert
  var Hari = Math.floor(seconds / (3600*24))
  var Jam = Math.floor(seconds % (3600*24) / 3600)
  var Menit = Math.floor(seconds % 3600 / 60)
  var Detik = Math.floor(seconds % 60)

  //Display
  const Timeleft=()=>{
    //9 Des 2021 = 1638118800 //8 Des 2021=1638921600
    if (seconds == NaN || seconds == 1638921600){
      return(
        <div><p>tunggu ...</p></div>
      )
    } else {
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
        //259200 = 3hari
        if ((seconds + 259200) >= 0) {
          return (
            <div>
              <Button>
                <a href={"https://kpuftugm.id/auth/google"}>Vote Sekarang</a>
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
  }

  return(
    <Timeleft/>
  );
}