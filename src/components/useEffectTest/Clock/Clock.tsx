import React, {useEffect, useState} from 'react';

type PropsType = {}

const getTimerString = (num: number) => num < 10
    ? "0" + num
    : num


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

    return (
        <div>
            <span>{getTimerString(date.getHours())}</span>
            :
            <span>{getTimerString(date.getMinutes())}</span>
            :
            <span>{getTimerString(date.getSeconds())}</span>
            .
        </div>
    );
};

