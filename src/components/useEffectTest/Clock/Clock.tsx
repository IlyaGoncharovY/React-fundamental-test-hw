import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

type PropsType = {
     title: "digital" | "analog"
}
//
// const getTimerString = (num: number) => num < 10
//     ? "0" + num
//     : num


export const Clock: React.FC<PropsType> = (props) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const intId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intId)
        }

    }, [])

    // const setClockHandler = () => {
    //     let view
    //     switch (props.title) {
    //         case "analog":
    //             view = <AnalogClock /*title={"analog"}*/ date={date}/>
    //             break
    //         case "digital":
    //         default:
    //             view = <DigitalClock title={"digital"} date={date}/>
    //     }
    // }



    return (
        <div>
            {/*<button onClick={setClockHandler}>Change clock</button>*/}
            <AnalogClock title={"analog"} date={date}/>
            <DigitalClock title={"digital"} date={date}/>
        </div>
    );
};


