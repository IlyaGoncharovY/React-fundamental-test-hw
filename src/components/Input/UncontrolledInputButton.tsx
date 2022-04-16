import React, {useRef, useState} from "react";

export const UncontrolledInputButton = () => {
    const [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            uncontrolButton
            <> <input ref={inputRef} id={"inputID"}/>
                <button onClick={save}>save
                </button>
                actual value - {value} </>
        </div>
    );
};