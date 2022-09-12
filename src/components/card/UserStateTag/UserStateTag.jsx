import style from './UserStateTag.module.css';
import { CircleCheck } from 'akar-icons';

const UserStateTag = ({ type = 'Inactive' }) => {
	return (
		<span className={style.type}>
			<CircleCheck className={style.type} />
			{type}
		</span>
	);
};

export default UserStateTag;
