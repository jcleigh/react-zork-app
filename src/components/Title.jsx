import React from 'react';

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
    top: '10',
    height: '2.75em',
    width: 'calc(100vw - 75px)',
    zIndex: 1000,
    verticalAlign: 'top',
    padding: 0,
    margin: 0
};

const pStyle = {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: '1.5em',
    fontFamily: ['VT323', 'monospace']
};

const Title = () =>
    <div style={divStyle}>
        <p style={pStyle}>
            {'react-zork'}
        </p>
    </div>

export default Title;