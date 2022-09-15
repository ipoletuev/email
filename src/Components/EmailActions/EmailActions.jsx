

import styles from './EmailActions.module.css';
import EmailCategory from './EmailCategory/EmailCategory';
import Navigate from './Navigate/Navigate';

function EmailActions() {

    let links = [
        { name: 'Входящие', link: '/' },
        { name: 'Отправленные', link: '/1' },
        { name: 'Важные', link: '/2' },
        { name: 'Черновики', link: '/3' },
        { name: 'Удаленные', link: '/4' },
    ];

    let linksCategories = [
        { name: 'Работа', link: '/' },
        { name: 'Поддержка', link: '/1' },
        { name: 'Приватное', link: '/2' },
    ];



    return (
        <div className = { styles.EmailActions }>

            <Navigate links = { links }/>

            <Navigate links = { linksCategories }/>
            
        </div>
    );
}

export default EmailActions;
