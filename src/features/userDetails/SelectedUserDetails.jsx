import {useDispatch, useSelector} from 'react-redux';
import {setSelectedUserID} from './userDetailsSlice';

function SelectedUserDetails() {
	const users = useSelector((state) => state.userList.users);
	const selectedUserID = useSelector(
		(state) => state.userDetails.selectedUserID,
	);

	const selectedUser = users.find((user) => user.id === selectedUserID);

	const dispatch = useDispatch();

	if (!selectedUserID) {
		return (
			<div className='selected-user-details'>
				<h2>Selected User</h2>
				<p>Not selected</p>
			</div>
		);
	}

	return (
		<div className='selected-user-details'>
			<h2>Selected User</h2>
			<p>
				<strong>Name: </strong>
				{selectedUser ? selectedUser.name : 'Not selected'}
			</p>
			<p>
				<strong>Email: </strong>
				{selectedUser ? selectedUser.email : 'Not selected'}
			</p>

			<button
				className='clear-btn'
				onClick={() => dispatch(setSelectedUserID(null))}
			>
				Clear Selection
			</button>
		</div>
	);
}

export default SelectedUserDetails;
