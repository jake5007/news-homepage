import React from 'react';
import Article from './Article';
import styles from '../styles/RankedArticle.module.css';

const RankedArticle = ({ item, rank }) => {

    return (
        <div className={styles.container}>
            <img src={item.imgPath} alt='article img' />
            <div className={styles.container__right}>
                <span className={styles.rank}>{rank < 10 ? `0${rank}` : rank}</span>
                <Article title={item.title} desc={item.desc} />
            </div>
        </div>
    )
}

export default RankedArticle;