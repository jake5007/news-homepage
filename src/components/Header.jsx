import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import styles from '../styles/Header.module.css';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.screen.width);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return windowWidth;
}

const Header = () => {
    const [ menuBtnClicked, setMenuBtnClicked ] = useState(false);
    const width = useWindowWidth();

    const handleMenuBtnClick = () => {
        setMenuBtnClicked(true);
    }

    const handleCloseBtnClick = () => {
        setMenuBtnClicked(false);
    }

    return (
        <div className={styles.header}>
            <img src='/assets/logo.svg' alt='logo'/>
            {
                width <= 375 ?
                <button className={styles.menuBtn} onClick={handleMenuBtnClick} /> :
                <Nav />
            }
            {
                menuBtnClicked ? <MobileNav onCloseBtnClick={handleCloseBtnClick} />: null
            }
            
        </div>
    )
}

export default Header;