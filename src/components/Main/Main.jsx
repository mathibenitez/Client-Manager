import Grid from "../Grid";
import style from "./Main.module.css";

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.form}>
        <div className={style.upperForm}>
          <section className={style.inputName}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </section>
          <section className={style.inputUserName}>
            <label htmlFor="username">UserName</label>
            <input id="username" />
          </section>
        </div>
        <div className={style.lowerForm}>
          <select name="" id="">
            <option value="">Client</option>
            <option value="">Provider</option>
          </select>
          <section>
            <input id="active" type="checkbox" />
            <label htmlFor="active">Is active?</label>
          </section>
          <button>Create User</button>
        </div>
      </div>
      <Grid />
    </main>
  );
};

export default Main;
