import React, {useState, useEffect} from 'react'




const Timer=()=>{

    const [seconds, setSeconds] = useState(0)

    const [isActive, setActive] = useState(false);

    
const toggle=()=>{
    setActive(!isActive)

}



const reset=()=>{
  setSeconds(0);
  setActive(false);
}

useEffect(()=>{
    let interval = null;
    if(isActive){
        interval=setInterval(()=>{
           setSeconds(seconds => seconds + 1)
        },1000)
    } else if(!isActive && seconds!==0){
        clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

return (
    
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
      <div>
       <button onClick={toggle}>{isActive?'Pause':'Start'}</button>
        <button onClick={reset}> Reset</button>
      </div>
       
    </div>
)

}

export default Timer