import { StyleSheet } from 'react-native';
import { size, colors, fonts } from '@src/config';

export default StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'transparent' 
	},

	recentTitleWrapper: {
		flex: 1, 
		backgroundColor: colors.lightGray, 
		paddingVertical: 24, 
		paddingHorizontal: 16
	},

	recentPostLabelWrapper: { 
		flex: 1 
	},

	recentPostLabel: { 
		fontFamily: fonts.bold 
	},

	recentPostDateWrapper: { 
		flex: 1, 
		alignItems: 'flex-end' 
	},

	recentPostDate: { 
		fontFamily: fonts.medium, 
		color: colors.gray 
	}
});

const currentDate = StyleSheet.create({
	dateWrapper: { 
		flex: 1, 
		flexDirection: 'row', 
		alignItems: 'center' 
	},
	big: { 
		color: colors.white, 
		fontSize: 45, 
		fontFamily: fonts.bold, 
		paddingRight: 12 
	},
	small: { 
		color: colors.white, 
		fontSize: 16, 
		opacity: 0.7, 
		fontFamily: fonts.medium 
	},
	chevronWrapper: { 
		flex: 1, 
		alignItems: 'flex-end', 
		justifyContent: 'center' 
	},
	icon: { 
		width: 7, 
		height: 12 
	}
});

const quoteStyle = StyleSheet.create({
	wrapper: { 
		flex: 2, 
		backgroundColor: 'transparent', 
		padding: 12 
	},

	titleWrapper: {
		flex: 3, 
		justifyContent: 'flex-end' 
	},

	title: {
		fontSize: 32, 
		fontFamily: fonts.bold, 
		color: colors.white
	},

	titleOrange: {
		color: colors.orange
	},

	subTitle: {
		fontFamily: fonts.thin, 
		color: colors.white, 
		paddingVertical: 12, 
		opacity: 0.5 
	},

	divider: {
		height: 1,
		opacity: 0.5,
		backgroundColor: colors.white,
	},


});

const recentPostItem = StyleSheet.create({
	wrapper: {
		width: size.byWidth(2.7),
		height: size.byWidth(4)
	},

	textBigBlue: { 
		color: colors.blue, 
		fontFamily: fonts.bold,
		fontSize: 36,
		opacity: 0.5, 
		marginTop: -5 
	},

	textSmallGray: { 
		color: colors.gray, 
		fontSize: 12, 
		paddingLeft: 5
	},

	caption: { 
		fontFamily: fonts.thin 
	}
});

export { currentDate, quoteStyle, recentPostItem };
