import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }


    return (
        <div>
            controlledCheckbox
            <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
        </div>
    );
};

