import React, {ChangeEvent, useState} from 'react';


export const UncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actionValue = event.currentTarget.value
        setValue(actionValue)
    }

    return (
        <div>
            uncontrolled
            <> <input onChange={onChangeHandler}/> - {value} </>
        </div>
    );
};


