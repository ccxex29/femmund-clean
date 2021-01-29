import React from 'react';
import styles from '../assets/styles/BodyBackgroundDecorations.module.css';

const BodyBackgroundDecorations = (props) => {
    return (
        <div className={styles.cloudsWrapper}>
            <div className={styles.cloudsLeft}>
                <div className={styles.cloudsLeft1}/>
                <div className={styles.cloudsLeft2}/>
                <div className={styles.cloudsLeft3}/>
                <div className={styles.cloudsLeft4}/>
            </div>
            <div className={styles.cloudsRight}>
                <div className={styles.cloudsRight1}/>
                <div className={styles.cloudsRight2}/>
                <div className={styles.cloudsRight3}/>
                <div className={styles.cloudsRight4}/>
            </div>
        </div>
    );
};

export default BodyBackgroundDecorations;