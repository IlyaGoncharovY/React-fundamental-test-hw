import React from 'react';

type NewButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const NewButton = (props: NewButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

