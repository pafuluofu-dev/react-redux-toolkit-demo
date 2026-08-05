import userListReducer from './features/usersList/userListSlice';
import userDetailsReducer from './features/userDetails/userDetailsSlice';

const rootReducer = {
	userList: userListReducer,
	userDetails: userDetailsReducer,
};

export default rootReducer;
