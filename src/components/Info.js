import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";

const style = {
    color: 'white',
    fontSize: '1.5em',
    position: 'absolute',
    top: '10',
    right: '10',
    zIndex: 1000
};

const Info = () =>
    <a
        aria-label={'infoLink'}
        href={'#info'}
    >
        <FontAwesomeIcon
            aria-label={'infoIcon'}
            icon={faInfoCircle}
            style={style}
        />
    </a>;

export default Info;