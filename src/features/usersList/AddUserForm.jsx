import {useDispatch, useSelector} from 'react-redux';
import {addUser} from './userListSlice';
import {useState} from 'react';

export default function AddUserForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	//// const users = useSelector((state) => state.userList.users);
	//// console.log(users);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newUser = {id: parseInt(Date.now() + Math.random()), name, email};

		dispatch(addUser(newUser));

		setName('');
		setEmail('');
	};

	return (
		<form
			className='add-user-form'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				placeholder='Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button type='submit'>Add User</button>
		</form>
	);
}
