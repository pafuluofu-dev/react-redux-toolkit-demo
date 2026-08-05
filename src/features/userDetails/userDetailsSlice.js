import {createSlice} from '@reduxjs/toolkit';

const initialState = {selectedUserID: null};

const userDetailsSlice = createSlice({
	name: 'userDetails',
	initialState,
	reducers: {
		setSelectedUserID: (state, action) => {
			state.selectedUserID = action.payload;
		},
	},
});

export default userDetailsSlice.reducer;
export const {setSelectedUserID} = userDetailsSlice.actions;
