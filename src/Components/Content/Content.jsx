
import Inbox from '../Inbox/Inbox';
import NewEmail from '../NewEmail/NewEmail';
import styles from './Content.module.css';
import { Route, Routes } from "react-router-dom";

function Content() {
    return (
        <div className={styles.Content}>

            <Routes>
                <Route exact path="/" element={<Inbox />} />
                <Route path="/newemail" element={<NewEmail />} />
            </Routes>

        </div>
    );
}

export default Content;
