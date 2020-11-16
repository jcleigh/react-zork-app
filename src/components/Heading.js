import React from 'react';

const dStyle = {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: ['VT323', 'monospace'],
    fontSize: 'calc(10px + 3vmin)'
};

const pStyle = {
    borderBottom: 'solid 1px white'
}

const Heading = ({title}) =>
    <div style={dStyle}>
        <p
            aria-label={'headingTitle'}
            style={pStyle}
        >
            {title}
        </p>
    </div>;

export default Heading;