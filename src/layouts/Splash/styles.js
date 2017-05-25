import { StyleSheet } from 'react-native';
import { colors } from '@src/config';

export default StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'white' 
	},

	icon: {
		width: 96, 
		height: 96
	},

	imageHolderStyle: {
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	titleStyle: {
		fontSize: 24,
		color: colors.darkGray
		//letterSpacing: 10
	},

	subtitleStyle: {
		color: colors.darkGray
	},

	textHolderStyle: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
});
