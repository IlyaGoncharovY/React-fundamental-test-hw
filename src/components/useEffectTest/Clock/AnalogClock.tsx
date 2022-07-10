import React from 'react';
import s from "./AnalogClock.module.css"


type AnalogClockType = {
     title: string
    date: Date
}


export const AnalogClock = (props: AnalogClockType) => {
    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return (
        <div className={s.clock}>
            <h1>{props.title}</h1>
            <div className={s.analogClock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    );
};
