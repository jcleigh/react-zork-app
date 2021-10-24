import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';

const style = {
    color: 'white',
    fontSize: '1.5em',
    position: 'absolute',
    top: '10',
    right: '40',
    zIndex: 1000
};

const Github = () =>
    <a
        aria-label={'githubLink'}
        href={'https://github.com/jcleigh/react-zork-app'}
        rel={'noreferrer'}
        target={'_blank'}
    >
        <FontAwesomeIcon
            aria-label={'githubIcon'}
            data-testid={'githubIcon'}
            icon={faGithub}
            style={style}
        />
    </a>;

export default Github;