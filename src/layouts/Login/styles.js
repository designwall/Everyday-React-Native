import { StyleSheet } from 'react-native';
import { colors, fonts } from '@src/config';

export default StyleSheet.create({ 
	wrapper: { 
		flex: 1 
	},

	logoWrapper: { 
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	logo: { 
		width: 72, 
		height: 48 
	},
	
	backgroundStyle: {
		flex: 2,
		alignSelf: 'stretch',
		width: null,
		flexDirection: 'column'
	},

	appName: {
		color: 'white',
		fontSize: 12,
		marginTop: 10
	},

	childViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginHolderStyle: {
		flex: 1,
		paddingTop: 20
	},

	buttonWrapper: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 12,
		alignItems: 'center'
	},

	floatButtonSelected: {
		color: colors.pink,
		fontFamily: fonts.medium
	},

	facebookButton: {
		alignSelf: 'stretch',
		backgroundColor: colors.facebookBlue,  
		borderRadius: 2000
	},

	facebookButtonTitle: { 
		color: colors.white 
	},

	facebookButtonIcon: { 
		width: 8, 
		height: 16 
	},

	googleButton: {
		alignSelf: 'stretch',
		backgroundColor: colors.white,  
		borderRadius: 2000,
		borderWidth: 1,
		borderColor: colors.googleGray
	},

	googleButtonTitle: { 
		color: colors.darkGray
	},

	googleButtonIcon: { 
		width: 16, 
		height: 16 
	},

	floatButtonsWrapper: { 
		flex: 1, 
		flexDirection: 'row', 
		alignItems: 'center' 
	},
});
