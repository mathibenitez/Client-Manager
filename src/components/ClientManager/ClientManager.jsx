import style from "./ClientManager.module.css";
import Header from "../Header";
import Main from "../Main";

const ClientManager = () => {
  return (
    <div className={style.container}>
      <div className={style.notice}>
        <p>DEMO. No real data was used in the making of the users listed.</p>
      </div>
      <Header />
      <Main />
    </div>
  );
};

export default ClientManager;
