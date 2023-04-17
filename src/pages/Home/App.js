import Header from "../../components/Header/Header";
import Img from "../../components/Img/Img";
import Info from "../../components/Info/Info";
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <div>
                    <Img />
                </div>
                <div>
                    <Info />
                </div>
            </div>
        </div>
    );
}

export default App;
