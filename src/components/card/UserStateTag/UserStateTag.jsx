import style from "./UserStateTag.module.css";
import { CircleCheck } from "akar-icons";

const UserStateTag = ({ status = "inactive" }) => {
  return status === "inactive" ? (
    <span className={style.inactive}>
      <CircleCheck className={style.inactive} />
      Inactive
    </span>
  ) : (
    <span className={style.active}>
      <CircleCheck className={style.active} />
      Active
    </span>
  );
};

export default UserStateTag;
