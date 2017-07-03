import { combineReducers } from 'redux';
import nav from './nav';
import sliderLogin from './sliderLogin';
import posts from './posts';
import user from './user';
import users from './users';
import recentPosts from './recentPosts';

export default combineReducers({
	nav,
	sliderLogin,
	posts,
	user,
	users,
	recentPosts,
	settings: () => []
});
