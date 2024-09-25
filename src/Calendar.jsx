import React from 'react'
import {useState} from "react"
const Calendar = () => {

    const dayOfWeek = ["Monday" , "Tuesday" , "Wednesday", "Thursday" , "Friday" , "Saturday" , "Sunday"]
    const monthsOfYear = ["January","February", "March", "April", "May","June" ,"July", "August", "September",
            "October", "November", "December"
    ]

        const date = new Date()
        const number = date.getDate()
        const month = date.getMonth()
        const day = (date.getDay() - 1)
        const year = date.getFullYear()
 

  return (
    <div>
       <div class="calendar">
        <div class="left">
            <p id="date" class="bold">{number}</p>
            <p id="month">{monthsOfYear[month]}</p>
        </div>
        <div class="right">
           
            <p id="day">{dayOfWeek[day]}</p>
            <p id="year">{year}</p>
        </div>
    </div>
    </div>
  )
}

export default Calendar
