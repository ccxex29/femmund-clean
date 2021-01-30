import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from '../assets/styles/Warning.module.css';
import {IoCloseCircle} from 'react-icons/io5';
import {FaHardHat} from 'react-icons/fa';

const Warning = () => {
    const [showWarning, setShowWarning] = useState(true);
    const [boxWidth, setBoxWidth] = useState(420);
    const boxEl = useRef(null);

    const removeWarning = useCallback(() => {
        setShowWarning(() => false);
        window.removeEventListener('resize', updateWidthState);
    }, []);

    useEffect(() => {
        updateWidthState();
        window.addEventListener('resize', updateWidthState);
        return (() => {
            removeWarning();
        });
    }, [removeWarning]);

    const updateWidthState = () => {
        setBoxWidth(() => boxEl.current.offsetWidth);
    };

    return (
        <>
        {
            showWarning ?
            <div className={styles.warningWrapper}>
                <div className={styles.warningBox} ref={boxEl}>
                        <span>
                            <FaHardHat size={16} style={{
                                position: 'relative',
                                marginRight: 16,
                                top: 1}}
                            />
                            This site is under development
                        </span>
                    <div className={styles.closeBtn} onClick={removeWarning} style={{
                        marginLeft: boxWidth - (32/2)
                    }}>
                        <div className={styles.closeBtnFill}/>
                        <IoCloseCircle size={32} color={'#666'}/>
                    </div>
                </div>
            </div> : null
        }
        </>
    );
};

export default Warning;