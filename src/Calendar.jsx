import React from 'react'
import {useState , useEffect} from "react"
const Calendar = () => {

    const dayOfWeek = ["Sunday" , "Monday" , "Tuesday" , "Wednesday", "Thursday" , "Friday" , "Saturday"]
    const monthsOfYear = ["January","February", "March", "April", "May","June" ,"July", "August", "September",
            "October", "November", "December"
    ]
 

        const date = new Date()
        const number = date.getDate()
        const month = date.getMonth()
        const day = (date.getDay())
        const year = date.getFullYear()

        const [clock, setClock] = useState('');
       
      
        useEffect(() => {
          function updateClock() {
              const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            setClock(`${hours}:${minutes}:${seconds}`);
      
        
          };
          updateClock()
      
          const intervalId = setInterval(updateClock, 1000); 
      
            return () => clearInterval(intervalId)
        }, []);
             
       
       

  return (
    <div>
       <div className="calendar">
        <div className="left">
            <p id="date" className="bold">{number}</p>
            <p id="month">{monthsOfYear[month]}</p>
        </div>
        <div className="right">
           
            <p id="day">Wednesday</p>
            <p id="year">{year}</p>
        </div>
    </div>
    <h2 className="time">Clock: {clock}</h2>
    </div>
  )
}

export default Calendar
