import React from 'react';

export default function BlueLogo(props: any) {
    let { style, logoType, ...otherProps } = props
    return <img loading='lazy' alt="logo"
        src={require(`../../assets/images/svg/Blue_Logo.svg`).default}
        style={style}
        {...otherProps} />
}
