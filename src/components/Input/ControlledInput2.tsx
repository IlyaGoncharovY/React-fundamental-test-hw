import React, {ChangeEvent, useState} from 'react';

export const ControlledInput2 = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            setParentValue(e.currentTarget.value)
        }


    return (
        <div>
            controlled2
            <input value={parentValue} onChange={onChangeHandler}/>
        </div>
    );
};

