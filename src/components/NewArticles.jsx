import React from 'react';
import Article from './Article';
import newNews from '../newNews';
import styles from '../styles/NewArticles.module.css';

const NewArticles = () => {

    return(
        <div className={styles.container}>
            <div className={styles.dark_container}>
                <h5>New</h5>
                {
                    newNews.map((item, idx) => 
                        <React.Fragment key={item.id}>
                            {
                                idx !== 0 ? 
                                <div key={'d' + idx} className={styles.divider} /> : null
                            }
                            <Article 
                                key={item.id}
                                title={item.title}
                                desc={item.desc}
                                isDarkBg
                            />
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
}

export default NewArticles;