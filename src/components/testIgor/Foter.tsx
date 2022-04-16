import React from 'react';

type FooterPropsType = {
    title: string
}

const Footer = (props: FooterPropsType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Footer;