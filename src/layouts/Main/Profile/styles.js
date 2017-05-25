import { StyleSheet } from 'react-native';
import { colors, fonts } from '@src/config';

export default StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 
		colors.lightGray 
	},

	rowWrapper: { 
		flexDirection: 'row' 
	}
});

const profile = StyleSheet.create({
	wrapper: { 
		flex: 2, 
		borderBottomWidth: 1, 
		borderBottomColor: colors.gray 
	},

	profileWrapper: { 
		flex: 1, 
		backgroundColor: 'white', 
		marginTop: -2 
	},

	nameWrapper: { 
		flex: 2, 
		alignItems: 'center', 
		justifyContent: 'center' 
	},

	name: { 
		fontFamily: fonts.medium, 
		color: colors.darkGray, 
		fontSize: 24
	},

	quote: { 
		fontFamily: fonts.italic, 
		color: colors.gray, 
		fontSize: 14, 
		paddingHorizontal: 60, 
		marginVertical: 10, 
		textAlign: 'center' 
	},

	infoWrapper: { 
		flex: 1, 
		flexDirection: 'row' 
	},

	infoItemWrapper: { 
		flex: 1, 
		alignItems: 'center' 
	},

	infoNumberWrapper: { 
		fontFamily: fonts.bold, 
		color: colors.darkGray, 
		fontSize: 22
	},

	infoLabelWrapper: { 
		color: colors.gray, 
		fontSize: 11
	}

});


const menuIcon = StyleSheet.create({
	wrapper: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		paddingVertical: 40 
	},

	label: { 
		fontSize: 14, 
		color: colors.darkGray, 
		marginTop: 10 
	}
});

export { profile, menuIcon };
