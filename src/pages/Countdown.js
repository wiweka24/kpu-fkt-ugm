import React from "react";
import Countdown from "react-countdown";
import Button from "../components/Button";

export default function Timerdown(){
  // Random component
  const Completionist = () => (
    <div>
      <Button>Vote Sekarang</Button>
    </div>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
          <div className="cd">
            <p>{days}<br/>Hari</p>
            <p>{hours}<br/>Jam</p>
            <p>{minutes}<br/>Menit</p>
            <p className="last">{seconds}<br/>Detik</p>
          </div>
      );
    }
  };

  return(
    <Countdown date={"2021-11-29T07:00:00"} renderer={renderer} />
  );
}