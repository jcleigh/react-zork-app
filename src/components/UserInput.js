import React from 'react';

const inputStyle = {
    backgroundColor: 'black',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'solid 1px white',
    color: 'white',
    fontFamily: ['VT323', 'monospace'],
    fontSize: 'calc(10px + 2vmin)',
    width: 'calc(100px + 50vmin)',
    outline: 'none'
};

const pStyle = {
    color: 'white',
    fontFamily: ['VT323', 'monospace'],
    fontSize: 'calc(10px + 2vmin)'
}

const UserInput = () =>
    <>
        <p style={pStyle}>
            &gt;&nbsp;
            <input
                aria-label={'userInput'}
                autoFocus
                placeholder={'Not yet implemented'}
                style={inputStyle}
            />
        </p>
    </>;

export default UserInput;