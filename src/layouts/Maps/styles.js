import { StyleSheet } from 'react-native';
import { size } from '@src/config';

export default StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'white' 
	},

	backgroundImg: { 
		width: size.screenWidth, 
		height: size.byHeight(3 / 2) 
	},

	viewWrapper: { 
		width: size.screenWidth, 
		height: size.screenHeight - 20, 
		position: 'absolute', 
		top: 19, 
		left: 0, 
		bottom: 0, 
		right: 0 
	},

	map: { 
		flex: 1 
	}
});
