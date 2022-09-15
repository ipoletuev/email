

import styles from './EmailWrite.module.css';
import { NavLink } from "react-router-dom";

function EmailWrite() {
  return (
    <div className={styles.EmailWrite}>

      <div className={styles.btn}>
        <NavLink to="newemail">
          Новое письмо
        </NavLink>
      </div>


    </div>
  );
}

export default EmailWrite;
