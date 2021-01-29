import React from 'react';
import {Link} from 'react-router-dom';
import {IoLogoGithub} from 'react-icons/io5';
import styles from '../assets/styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={'/'} style={{color: '#333'}}>
                <span>Femmund</span>
            </Link>
            <nav>
                <a href={'https://github.com/ccxex29/femmund-clean'}>
                    <IoLogoGithub color={'#333'} style={{
                        marginTop: 8
                    }} />
                </a>
            </nav>
        </header>
    );
};

export default Header;