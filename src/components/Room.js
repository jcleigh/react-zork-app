import React, {Fragment} from 'react';

import Heading from './Heading';

const style = {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: ['VT323', 'monospace'],
    fontSize: 'calc(10px + 2vmin)'
};

// Temporarily storing room data here while developing
const rooms = {
    room0: {
        desc: 'Copyright (c) 1981, 1982, 1983 Infocom, Inc. All rights reserved.<br>ZORK is a registered trademark of Infocom, Inc.<br>Revision 88 / Serial number 840726',
        title: 'ZORK I: The Great Underground Empire'
    },
    room1: {
        desc: 'You are standing in an open field west of a white house, with a boarded front door.<br>There is a small mailbox here.',
        title: 'West of House'
    },
    room2: {
        desc: 'You are facing the south side of a white house. There is no door here, and all the windows are boarded.',
        title: 'South of House'
    },
    room3: {
        desc: 'You are behind the white house. A path leads into the forest to the east. In one corner of the house there is a small window which is slightly ajar.',
        title: 'Behind House'
    }
};
const roomToShow = rooms.room0;

const Room = ({description = '', title = ''}) =>
    <Fragment>
        <Heading title={roomToShow.title}/>
        <p
            aria-label={'roomDescription'}
            style={style}
        >
            {roomToShow.desc
                .split('<br>')
                .map((line, acc) =>
                    <Fragment key={`line-${acc}`}>
                        {line}
                        <br key={`br-${acc}`} />
                    </Fragment>
                )
            }
        </p>
    </Fragment>

export default Room;