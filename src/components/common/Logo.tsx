import React from 'react';

export default function Logo(props: any) {
    let { style, logoType, ...otherProps } = props
    return <img loading='lazy' alt="logo"
        src={require(`../../assets/images/svg/${logoType === "blue"? 'Blue_Logo': 'Logo'}.svg`)}
        style={style}
        {...otherProps} />
}
