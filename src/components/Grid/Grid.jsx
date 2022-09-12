import UserCard from '../card/UserCard';
import style from './Grid.module.css';

const Grid = () => {
	return (
		<div className={style.grid}>
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
			<UserCard />
		</div>
	);
};

export default Grid;
