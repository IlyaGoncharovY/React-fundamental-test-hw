import React, {useMemo, useState} from 'react';

function generateData() {
    return 43698743093487
}


const UseStateTest = () => {

    // let initiationValue = useMemo(generateData, [])

    let [counter, setCounter] = useState(generateData)

    const changer = (state:number) => state + 1

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(changer)}>add</button>
        </div>
    );
};

export default UseStateTest;