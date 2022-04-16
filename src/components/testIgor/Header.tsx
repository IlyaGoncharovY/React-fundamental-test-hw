import React from 'react';

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <HeaderBody title={props.title}/>
        </div>
    );
};

type HeaderBodyPropsType = {
    title: string
}

const HeaderBody = (props: HeaderBodyPropsType) => {
    return (
        <>
        {props.title}
        </>
    )
}


