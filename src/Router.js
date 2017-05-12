import { createRouter } from '@expo/ex-navigation';

//Screens
import SplashScreen from '@src/screens/SplashScreen';
import Login from '@src/screens/Login';
import Main from '@src/screens/main/Main';
import NewPost from '@src/screens/NewPost';

//Router
const Router = createRouter(() => ({
  SplashScreen: () => SplashScreen,
  Login: () => Login,
  Main: () => Main,
  NewPost: () => NewPost
}));

export default Router;
