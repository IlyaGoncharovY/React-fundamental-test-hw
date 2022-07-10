import React, {useEffect, useState} from 'react';

export const KeysTracker = () => {
    let [text, setText] = useState("1")

    console.log("useEffect text" + text)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)

        }
        window.document.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])


    return (
        <div>
            <h1>UseEffectTest2_Text</h1>
            Typed text: {text}
        </div>
    );
};

