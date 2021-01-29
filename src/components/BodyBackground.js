import React from 'react';
import styles from '../assets/styles/BodyBackground.module.css';
import BodyBackgroundDecorations from "./BodyBackgroundDecorations";

const BodyBackground = () => {
    return (
        <>
            <div className={styles.curved}/>
            <div className={styles.content}/>
            <div className={styles.decorations}>
                <BodyBackgroundDecorations className={styles.decorations} />
            </div>
        </>
    );
};

export default BodyBackground;