import { combineReducers } from 'redux';
import nav from './nav';
import sliderLogin from './sliderLogin';
import post from './post';
import user from './user';
import users from './users';

export default combineReducers({
	nav,
	sliderLogin,
	posts: () => [],
	post,
	user,
	users,
	settings: () => []
});
