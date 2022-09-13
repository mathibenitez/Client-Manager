import style from "./UserCard.module.css";
import { TrashCan, Pencil } from "akar-icons";
import UserType from "../UserType";
import UserStateTag from "../UserStateTag";

const UserCard = ({ type = "Client", status = "Inactive" }) => {
  // #region
  const scr =
    "https://play-lh.googleusercontent.com/KdF8i_vGiF5VyloWqLeEhh4koxOatmKiuEstiHivKOtyazleUVKw2-hX0ydBoiFbz-u3=w240-h480-rw";
  // #endregion

  return (
    <article className={style.userCard}>
      <div className={style.upperCard}>
        <div className={style.nameTag}>
          <p className={style.name}>Dogue</p>
          <p className={style.tag}>@Doguito</p>
        </div>
        <div>
          <img className={style.photo} src={scr} alt="" />
        </div>
      </div>
      <div className={style.lowerCard}>
        <div className={style.userState}>
          <UserType type={type} />
          <UserStateTag status={status} />
        </div>
        <div className={style.userActions}>
          <span className={style.delete}>
            <TrashCan className={style.iconDelete} />
          </span>
          <span className={style.edit}>
            <Pencil className={style.iconEdit} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
