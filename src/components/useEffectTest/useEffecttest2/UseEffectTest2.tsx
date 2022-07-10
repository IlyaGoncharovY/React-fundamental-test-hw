import React, {useEffect, useState} from 'react';

export const UseEffectTest2 = () => {
    let [counter, setCounter] = useState(1)

    console.log("UseEffectTest2")
    useEffect(() => {
        console.log("UseEffectTest2 occurred" + counter)

        return () => {
            console.log("reset effect"+ counter)
        }
    }, [counter])

    const setCounterHandler = () => setCounter(counter + 1)

    return (
        <div>
            <h1>UseEffectTest2</h1>
            Hello, counter: {counter}
            <button onClick={setCounterHandler}>+</button>
        </div>
    );
};

