import React from 'react';
import styles from './style.module.scss'
import {useSelector} from "react-redux";

function Label() {
    const user = useSelector(state => state.main.user);

    return (
        <div className={styles.label}>
          <div className={styles.avatar}>
              <img src={user.avatar_url} alt=""/>
          </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    {user.login}
                    <span>Joined 25 Jan 2011</span>
                </div>
                <a href={user.html_url}>
                    @{user.name}
                </a>
                <div className={styles.bio}>
                    {user.bio}
                </div>
                <div className={styles.statistic}>
                    <div className={styles.column}>
                        Repos
                        <span>{user.public_repos}</span>
                    </div>
                    <div className={styles.column}>
                        Followers
                        <span>{user.followers}</span>
                    </div>
                    <div className={styles.column}>
                        Following
                        <span>{user.following}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Label;