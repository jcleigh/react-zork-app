import React from 'react';

import Room from './Room';
import UserInput from './UserInput';
import Github from "./Github";

const style = {
    backgroundColor: 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    padding: '0 25px 0 25px'
};

const Terminal = () =>
    <div style={style}>
        <Github />
        <Room />
        <UserInput />
    </div>;

export default Terminal;
