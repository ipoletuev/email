
import styles from './App.module.css';
import Content from './Content/Content';
import EmailActions from './EmailActions/EmailActions';
import EmailWrite from './EmailWrite/EmailWrite';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        <EmailWrite />

        <EmailActions />
      </div>

      <Content />

    </div>
  );
}

export default App;
