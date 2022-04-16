import React from 'react';

type BodyPropsType = {
    title: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <div>
            <BodyBody title={props.title}/>

        </div>
    );
};

type BodyBodyPropsType = {
    title: string
}

const BodyBody = (props: BodyBodyPropsType) => {
    return (
        <>
            {props.title}
        </>
    )
}
