import React from 'react';
import styles from '../styles/ReadMore.module.css';

const ReadMore = () => {
    
    return(
        <div className={styles.container}>
            <p>
                We dive into the next evolution of the web that claims to put the power of the platforms
                back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button>READ MORE</button>
        </div>
    )
}

export default ReadMore;