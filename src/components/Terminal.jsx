import React from 'react';

import Room from './Room';
import UserInput from './UserInput';
import Github from './Github';
import Info from './Info';
import Title from './Title';

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
    <div>
        <Title/>
        <Info/>
        <Github/>
        <div style={style}>
            <Room/>
            <UserInput/>
        </div>
    </div>;

export default Terminal;
