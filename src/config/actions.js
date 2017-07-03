import * as types from './constants/actionTypes';

export const updateRecentPosts = (posts) => ({
	type: types.UPDATE_RECENT_POSTS,
	payload: posts
});
