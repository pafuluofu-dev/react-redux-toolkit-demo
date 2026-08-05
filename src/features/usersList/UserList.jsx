import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, removeUser} from './userListSlice';
import {setSelectedUserID} from '../userDetails/userDetailsSlice';

function UserList() {
	const users = useSelector((state) => state.userList.users);
	const loading = useSelector((state) => state.userList.loading);
	const error = useSelector((state) => state.userList.error);

	const dispatch = useDispatch();

	return (
		<div className='user-list'>
			<h2>User List</h2>

			{loading && <p>Loading...</p>}
			{error && <p className='error-message'>{error}</p>}

			{/* Кнопка загрузки */}
			<button
				className='load-btn'
				onClick={() => dispatch(fetchUsers('users'))}
			>
				Load Users
			</button>

			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<span>
							{user.name} - {user.email}
						</span>

						<div className='btn-group'>
							<button
								className='select-btn'
								onClick={() =>
									dispatch(setSelectedUserID(user.id))
								}
							>
								Select
							</button>

							<button
								className='delete-btn'
								onClick={() => dispatch(removeUser(user.id))}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default UserList;
