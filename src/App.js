import styles from './App.module.scss'
import Header from "./components/Header";
import Input from "./components/Input";
import Label from "./components/Label";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => state.main.user);
    const isLoading = useSelector(state => state.main.isLoading);
    return (
        <div className={styles.container}>
            <Header/>
            <Input/>
            {user && <Label user={user} isLoading={isLoading}/>}
        </div>
    );
}

export default App;
