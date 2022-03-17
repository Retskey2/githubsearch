import React from 'react';
import styles from './style.module.scss'
import {useSelector} from "react-redux";
import Spinner from "../Spinner";

function Label() {
    const user = useSelector(state => state.main.user);
    const isLoading = useSelector(state => state.main.isLoading);
    const newDate = new Date(user.created_at);
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    return (
        <div className={styles.label}>
            {
                !isLoading ?
                    <div className={styles.cards}>
                        <div className={styles.avatar}>
                            <img src={user.avatar_url} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>
                                <div className={styles.login}>{user.login}</div>
                                <div className={styles.date}>Joined {newDate.toLocaleString('en-US', options)}
                                </div>
                                <a className={styles.ref} href={user.html_url}>@{user.name ? user.name : "noname"}</a>
                            </div>
                            <div className={styles.bio}>
                                {user.bio ? user.bio : "This is user has not bio"}
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
                    </div> : <Spinner/>
            }
        </div>
    );
}

export default Label;