import React, { useState } from "react";
import { date_exitIcon } from "../svg/svg-icons";
import { history_items } from "../JSON/jsonFile";
import "../scss/History.scss"
import Calendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css' // Default Style

export default function History ({historyActive, setHistoryActive}) {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    return(
        <>
            <div className="date-component">
                <div className="date-exit-icon" onClick={() => setHistoryActive(!historyActive)}>{date_exitIcon()}</div>
                <div className="date-header">
                    Delivery time
                </div>
                <div className="date-calendar">
                    <Calendar 
                            startDate={startDate} 
                            endDate={endDate}
                            onChange={(startDate, endDate) => {setStartDate(startDate); setEndDate(endDate)}} 
                            markedDays={date => date > new Date().getTime()}
                            disableDates={date => date < (new Date().getTime() - 86400000)}
                            />
                </div>
                <div className="history-items">
                    {
                        history_items.map((item, id) => {
                            return(
                                <>
                                    <div className="history-item" key={item.id}>
                                        <span>{item.dayAndMooth}</span>
                                        <span>{item.time}</span>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}