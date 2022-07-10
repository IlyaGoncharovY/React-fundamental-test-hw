import React, {useEffect, useState} from 'react';

export const UseEffectTest = () => {

    let [fake, setFake] = useState(1)
    let [counter, setCounter] = useState(1)

    // console.log("test1")

    useEffect(() => {
        // console.log("useEff test всегда рендер")
        document.title = String(counter)
    })
    useEffect(() => {
        // console.log("useEff test только при первом рендере (componentDidMount")
        document.title = String(counter)
    }, [])
    useEffect(() => {
        // console.log("useEff test всегда и при изменении counter ")
        document.title = String(counter)
    }, [counter])

    return (
        <div>
            Hello, {counter} {fake}
            <button onClick={() => setFake(fake + 1)}>addFake</button>
            <button onClick={() => setCounter(counter + 1)}>addCount</button>
        </div>
    );
};

