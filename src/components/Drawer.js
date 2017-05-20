import { DrawerNavigator } from 'react-navigation';
import { size } from '@src/styles';

const routeConfigs = {};

const drawerNavigatorConfig = {
	drawerWidth: size.byWidth(3 / 2)
};


export default DrawerNavigator(routeConfigs, drawerNavigatorConfig);
