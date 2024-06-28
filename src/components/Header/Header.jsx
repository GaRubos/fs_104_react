import s from './Header.module.css'

function Header() {
    return (
        <div className={s.title}>
            <p>Logo</p>
            <h1>Это шапка сайта</h1>
        </div>
    );
};

export default Header;