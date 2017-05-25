import { StyleSheet } from 'react-native';

import { colors, fonts } from '@src/config';

const cardStyles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row', 
		marginHorizontal: 16, 
		marginVertical: 10
	},

	dateWrapper: {
		alignItems: 'center', 
		marginRight: 10
	},

	day: { 
		color: colors.blue, 
		opacity: 0.5, 
		fontSize: 30, 
		fontFamily: fonts.bold 
	},

	month: {
		color: colors.blue, 
		opacity: 0.5, 
		fontSize: 12, 
		fontFamily: fonts.bold, 
		marginTop: -5
	}
});

export default StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'transparent' 
	},

	searchWrapper: { 
		padding: 12 
	},

	icon: { 
		width: 23,
		height: 23
	},

	listWrapper: { 
		flex: 1, 
		backgroundColor: colors.lightGray 
	}
});

export { cardStyles };
