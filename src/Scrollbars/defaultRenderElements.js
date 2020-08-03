import React from 'react';
/* eslint-disable react/prop-types */

export function renderViewDefault(props) {
    return <div {...props}/>;
}

export function renderTrackHorizontalDefault(props) {
    const finalStyle = {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    };
    return <div {...props} style={{ ...props.style, ...finalStyle }} />;
}

export function renderTrackVerticalDefault(props) {
    const finalStyle = {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    };
    return <div {...props} style={{ ...props.style, ...finalStyle }} />;
}

export function renderThumbHorizontalDefault(props) {
    const finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    };
    return <div {...props} style={{ ...props.style, ...finalStyle }} />;
}

export function renderThumbVerticalDefault(props) {
    const finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    };
    return <div {...props} style={{ ...props.style, ...finalStyle }} />;
}
