import React, {useState} from 'react';
import styles from './style.module.scss'
import {incrementCountAction} from "../../store/mainReducer";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../asyncAction/users";

function Input() {
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    return (
        <div className={styles.inputForm}>
            <input value={text} onChange={event => setText(event.target.value)} placeholder="Search GitHub" type="text"/>
            <button onClick={()=> dispatch(fetchUser(text))}>Поиск</button>
        </div>
    );
}

export default Input;