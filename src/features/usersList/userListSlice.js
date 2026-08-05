import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
	users: [],
	loading: false,
	error: null,
};

export const fetchUsers = createAsyncThunk(
	'userList/fetchUsers',
	async (arg, {rejectWithValue}) => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/${arg}`,
			);

			if (!res.ok) {
				return rejectWithValue({
					status: res.status,
					statusText: res.statusText,
				});
			}

			return await res.json();
		} catch (error) {
			return rejectWithValue({
				status: error.status,
				statusText: error.statusText,
			});
		}
	},
);

const userListSlice = createSlice({
	name: 'userList',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.users.push(action.payload);
		},
		removeUser: (state, action) => {
			state.users = state.users.filter(
				(user) => user.id !== action.payload,
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = [...state.users, ...action.payload];
				state.loading = false;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;

				state.error = action.payload || 'An error occured!';
			});
	},
});

export default userListSlice.reducer;
export const {addUser, removeUser} = userListSlice.actions;
