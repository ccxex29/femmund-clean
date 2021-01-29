import React from 'react';
import {IoLogoGithub} from 'react-icons/io5';
import styles from '../assets/styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <span>Femmund</span>
            <nav>
                <a href={'https://github.com'}>
                    <IoLogoGithub color={'#333'} />
                </a>
            </nav>
        </header>
    );
};

export default Header;