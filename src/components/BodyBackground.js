import React from 'react';
import styles from '../assets/styles/BodyBackground.module.css';

const BodyBackground = () => {
    return (
        <>
            <div className={styles.curved}></div>
            <div className={styles.content}></div>
        </>
    );
};

export default BodyBackground;