import { StyleSheet } from 'react-native';
import { colors, size, fonts } from '@src/config';

export default StyleSheet.create({
	thumbnail: { 
		width: size.screenWidth, 
		height: size.screenHeight / 3, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	dateWrapper: { 
		width: 70, 
		height: 28, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	titleWrapper: { 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	postDate: { 
		backgroundColor: 'transparent', 
		fontFamily: fonts.bold, 
		color: colors.white 
	},
	postTitle: { 
		backgroundColor: 'transparent', 
		fontFamily: fonts.bold, 
		color: colors.white, 
		fontSize: 24, 
		marginTop: 12, 
		marginHorizontal: 56, 
		textAlign: 'center' 
	},
	headerWrapper: { 
		position: 'absolute',
		paddingTop: 18, 
		left: 0, 
		right: 0
	},
	contentWrapper: { 
		flex: 2, 
		backgroundColor: colors.white, 
		paddingHorizontal: 12 
	},
	postTime: { 
		marginBottom: 36, 
		marginTop: 12, 
		color: colors.gray, 
		fontSize: 12, 
		textAlign: 'center' 
	},

	postContent: { 
		marginBottom: 12, 
		color: colors.gray, 
		fontSize: 14, 
		textAlign: 'justify', 
		lineHeight: 22,
		paddingBottom: 10
	},

	author: {
		color: colors.white,
		backgroundColor: 'transparent',
		fontSize: 12,
		marginTop: 12
	},

	bottombarWrapper: { 
		position: 'absolute', 
		bottom: 0, 
		left: 0, 
		right: 0, 
		height: size.byHeight(10), 
		backgroundColor: colors.white, 
		borderTopWidth: 1, 
		borderTopColor: colors.lightGray, 
		paddingHorizontal: 30, 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between' 
	},

	heartCommentWrapper: { 
		flexDirection: 'row' 
	},

	heartIcon: { 
		width: 20, 
		height: 20 
	},

	textIcon: { 
		color: '#CFCFCF' 
	},

	commentIcon: { 
		width: 20, 
		height: 20, 
		marginLeft: 8 
	},

	nextButton: { 
		color: '#82A0FA' 
	}
});

const commentCardStyle = StyleSheet.create({
	wrapper: { 
		height: size.screenHeight - 18,
		position: 'absolute',
		bottom: 0, 
		left: 0, 
		right: 0, 
		backgroundColor: 'white',
		borderRadius: 12, 
	},

	title: { 
		fontFamily: fonts.regular, 
		fontSize: 17, 
		color: colors.darkGray 
	},

	closeButton: { 
		color: '#82A0FA', 
		fontFamily: fonts.medium, 
		fontSize: 14 
	},

	commentListWrapper: { 
		flex: 1,
		borderTopWidth: 1,
		borderTopColor: colors.googleGray
	}

});

const commentStyle = StyleSheet.create({
	wrapper: { 
		flexDirection: 'row', 
		margin: 16 
	},

	avatar: { 
		width: 50, 
		height: 50, 
		borderRadius: 25 
	},

	commentWrapper: { 
		flex: 1, 
		paddingHorizontal: 16, 
		paddingBottom: 16, 
		borderBottomWidth: 1, 
		borderBottomColor: '#E6E6E6' 
	},

	name: { 
		fontFamily: 
		fonts.medium, 
		fontSize: 14, 
		color: colors.darkGray 
	},

	comment: { 
		fontSize: 12, 
		color: colors.gray, 
		marginVertical: 12 
	},

	bottomWrapper: { 
		flexDirection: 'row', 
		justifyContent: 'space-between' 
	},

	reply: { 
		fontFamily: fonts.medium, 
		fontSize: 12, 
		color: colors.darkGray 
	},

	timePost: { 
		fontSize: 12, 
		color: colors.gray 
	},

	loveIconWrapper: {
		position: 'absolute', 
		top: 0, 
		right: 0 
	},

	loveIcon: { 
		width: 16, 
		height: 16, 
	}
});

export { commentStyle, commentCardStyle };
