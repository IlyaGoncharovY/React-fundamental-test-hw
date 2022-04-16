import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }


    return (
        <div>
            controlledSelect
            <select value={parentValue} onChange={onChangeHandler}>
                <option>none</option>
                <option value={"1"}>Moscow</option>
                <option value={"2"}>St.Peterdurg</option>
                <option value={"3"}>Minsk</option>
            </select>
        </div>
    );
};

