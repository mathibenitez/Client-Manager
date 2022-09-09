import style from "./UserCard.module.css";
import { TrashCan, Pencil } from "akar-icons";
import UserType from "../UserType";
import UserStateTag from "../UserStateTag";

const UserCard = () => {
  // #region
  const scr =
    "data:image/jpeg;base64,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";
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
          <UserType />
          <UserStateTag />
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