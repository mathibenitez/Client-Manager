import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.titulo}>User Manager</h1>
      <p>Manages your clients and providers</p>
    </header>
  );
};

export default Header;
