import style from "./UserType.module.css";

const UserType = ({ type = "client" }) => {
  if (type === "client") return <span className={style.client}>Client</span>;

  if (type === "provider")
    return <span className={style.provider}>Provider</span>;
};

export default UserType;
