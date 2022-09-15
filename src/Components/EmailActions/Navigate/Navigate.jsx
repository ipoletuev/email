import styles from './Navigate.module.css';
import { NavLink } from "react-router-dom";



function Navigate(props) {


  return (
    <div className={styles.Navigate}>

      <ul>
        {
          props.links.map( (el, index) => 
            
              <li key={index}>
                <NavLink to={el.link} className={
                  ({ isActive }) =>
                    isActive ? styles.active : undefined
                }>
                  {el.name}
                </NavLink>
              </li>
            )
        }
      </ul>

    </div>
  );
}

export default Navigate;
