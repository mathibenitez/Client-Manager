import style from './UserType.module.css';

const UserType = ({ type = 'Client' }) => {
	return <span className={style.type}>{type}</span>;
};

export default UserType;
