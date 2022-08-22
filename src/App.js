import React, { useState } from 'react';
import "./styles.css";

export default function App() {
  var [hour,setHour] = useState(0)

  function hourDisplay(e) {
    hour=e.target.value
    setHour(hour)
  }

  var [min,setMin] = useState(0)

  function minDisplay(e) {
    min=e.target.value
    setMin(min)
  }

  var [sec,setSec] = useState(0)

  function secDisplay(e) {
    sec=e.target.value
    setSec(sec)
  }

  function startTimer() {
    var val=(hour*60*60)+(min*60)+sec

    setInterval(function () {
      val=val-1
    }, 1000)
  }

  return (
    <div className="App">
      <h1>timer app</h1>
      <input onChange={hourDisplay} type="number" placeholder="enter hours of timer"/>
      <input onChange={minDisplay} type="number" placeholder="enter minutes of timer"/>
      <input onChange={secDisplay} type="number" placeholder="enter seconds of timer"/>
      <br/>
      <button onClick={startTimer} style={{backgroundColor:"green"}}>start</button>
      <button style={{backgroundColor:"orange"}}>reset</button>
      <button style={{backgroundColor:"red"}}>stop</button>
      <br/>
      <div className="timerDisplay">
        <h1>{hour}:{min}:{sec}</h1>
      </div>
      <progress min="0" max={(hour*60*60)+(min*60)+sec} value="2"/>
    </div>
  );
}
