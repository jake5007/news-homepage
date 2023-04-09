import React from 'react';
import styles from '../styles/Nav.module.css';

const list = [ 'Home', 'New', 'Popular', 'Trending', 'Categories' ];

const Nav = () => {
    
    return (
        <ul className={styles.nav}>
            {
                list.map((item, idx) => <li key={idx}>{item}</li>)
            }
        </ul>
    )
}

export default Nav;