import React from 'react';
import styles from '../styles/MobileNav.module.css';
import Nav from './Nav';

const MobileNav = ({ onCloseBtnClick }) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.menubox}>
                <button className={styles.closeBtn} onClick={onCloseBtnClick} />
                <Nav />
            </div>
        </div>
    )
}

export default MobileNav;