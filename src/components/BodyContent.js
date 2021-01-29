import React from 'react';
import {MdNavigateNext} from 'react-icons/md'
import styles from '../assets/styles/BodyContent.module.css';

const BodyContent = () => {
    return (
        <div className={styles.bodyContent}>
            <span className={styles.biggieWelcome}>
                Welcome to Femmund
            </span>
            <span className={styles.descWelcome}>
                A Shared Web Profile Application
            </span>
            <div className={styles.nextBtn}>
                <MdNavigateNext size={36} color={'#333'} />
            </div>
        </div>
    );
};

export default BodyContent;