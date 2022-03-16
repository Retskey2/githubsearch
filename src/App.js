import styles from './App.module.scss'
import Header from "./components/Header";
import Input from "./components/Input";
import Label from "./components/Label";


function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <Input/>
            <Label/>
        </div>
    );
}

export default App;
