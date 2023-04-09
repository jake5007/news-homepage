import React from 'react';
import styles from '../styles/Article.module.css';

const Article = ({ title, desc, isDarkBg = false }) => {

    return (
        <>
            <span className={!isDarkBg ? styles.title : styles.darkBgTitle}>{title}</span>
            <span className={!isDarkBg ? styles.desc : styles.darkBgDesc}>{desc}</span>
        </>
    )
}

export default Article;