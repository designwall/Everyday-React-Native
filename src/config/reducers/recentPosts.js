import * as types from '../constants/actionTypes';

const recentPosts = (state = [], action) => {
	switch (action.type) {
		case types.UPDATE_RECENT_POSTS:
			return action.payload;
		default:
			return state;
	}
};

export default recentPosts;
