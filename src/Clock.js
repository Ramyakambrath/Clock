import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Display from './Display'
import Panel from './Panel'



const Timer=()=>{

    const [date, setDate] = useState(new Date())

    const [isActive, setActive] = useState(true);

    
const toggle=()=>{
    setActive(!isActive)

}



useEffect(()=>{
    let interval = null;
        interval=setInterval(()=>{
            setDate(date=> new Date())
        },1000)
    
    return () => clearInterval(interval);
  }, [isActive, date]);

return (
   
    
    <div className="app">
      <div className="time">
      <Panel isActive={isActive} toggle={toggle}/>
 
     <Display date={date} isActive={isActive}/>
   
      </div> 
       
    </div>
)

}

export default Timer