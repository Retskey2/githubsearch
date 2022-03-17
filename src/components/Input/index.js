import React, {useState} from 'react';
import styles from './style.module.scss'
import {GetLoadingAction, incrementCountAction} from "../../store/mainReducer";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../asyncAction/users";

function Input() {
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    function getUserGitHub() {
        dispatch(fetchUser(text));
        dispatch(GetLoadingAction(true))
    }

    return (
        <div className={styles.inputForm}>
            <input value={text} onChange={event => setText(event.target.value)} placeholder="Search GitHub"
                   type="text"/>
            <button onClick={() => getUserGitHub()}>Поиск</button>
        </div>
    );
}

export default Input;