import React from 'react';
import styles from '../assets/styles/Warning.module.css';
import {IoCloseCircle} from 'react-icons/io5';

const Warning = () => {
    return (
        <div className={styles.warningWrapper}>
            <div className={styles.warningBox}>
                <span>
                    This site is under development
                </span>
                <div className={styles.closeBtn}>
                    <div className={styles.closeBtnFill}></div>
                    <IoCloseCircle size={32} color={'#666'} />
                </div>
            </div>
        </div>
    );
};

export default Warning;