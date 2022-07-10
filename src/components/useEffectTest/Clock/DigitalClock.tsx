import React from 'react';

type DigitalBlockType = {
    title:string
    date: Date

}

const getTimerString = (num: number) => num < 10
    ? "0" + num
    : num

export const DigitalClock = (props:DigitalBlockType) => {
    return (
        <>
            {props.title}
            <span>{getTimerString(props.date.getHours())}</span>
            :
            <span>{getTimerString(props.date.getMinutes())}</span>
            :
            <span>{getTimerString(props.date.getSeconds())}</span>
            .
        </>
    );
};
