import React from 'react'
import {useState} from "react"
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

        console.log(day)
 

  return (
    <div>
       <div className="calendar">
        <div className="left">
            <p id="date" className="bold">{number}</p>
            <p id="month">{monthsOfYear[month]}</p>
        </div>
        <div className="right">
           
            <p id="day">{dayOfWeek[day]}</p>
            <p id="year">{year}</p>
        </div>
    </div>
    </div>
  )
}

export default Calendar
