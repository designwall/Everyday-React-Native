import { StackNavigator } from 'react-navigation';

//Screens
import SplashScreen from '@src/layouts/Splash';
import Login from '@src/layouts/Login';
import Main from '@src/layouts/Main';
import NewPost from '@src/layouts/NewPost';
import Post from '@src/layouts/Post';
import Notifications from '@src/layouts/Notifications';
import Maps from '@src/layouts/Maps';
import Drafts from '@src/layouts/Drafts';
import Photos from '@src/layouts/Photos';

const RouteConfigs = {
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  Main: { screen: Main },
  NewPost: { screen: NewPost },
  Post: { screen: Post },
  Notifications: { screen: Notifications },
  Maps: { screen: Maps },
  Drafts: { screen: Drafts },
  Photos: { screen: Photos }
};

const StackNavigatorConfig = {
	navigationOptions: { header: null }
};


//Router
const Router = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Router;
