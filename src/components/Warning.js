import React, {useState} from 'react';
import styles from '../assets/styles/Warning.module.css';
import {IoCloseCircle} from 'react-icons/io5';
import {FaHardHat} from 'react-icons/fa';

const Warning = () => {
    const [showWarning, setShowWarning] = useState(true);
    const removeWarning = () => {
        setShowWarning(() => false);
    };

    return (
        <>
        {
            showWarning ?
            <div className={styles.warningWrapper}>
                <div className={styles.warningBox}>
                        <span>
                            <FaHardHat size={16} style={{position: 'relative', marginRight: 16, top: 1}} />
                            This site is under development
                        </span>
                    <div className={styles.closeBtn} onClick={removeWarning}>
                        <div className={styles.closeBtnFill}></div>
                        <IoCloseCircle size={32} color={'#666'}/>
                    </div>
                </div>
            </div> : null
        }
        </>
    );
};

export default Warning;