import { StyleSheet } from 'react-native';
import { colors, fonts, size } from '@src/config';

export default StyleSheet.create({
	wrapper: {
		backgroundColor: 'transparent', 
		flex: 1, 
		position: 'absolute', 
		top: 24, 
		left: 0, 
		bottom: 0, 
		right: 0 
	},
	
	wrapperImageBg: { 
		width: size.byWidth(1), 
		height: size.byHeight(1.5) 
	},

	postWrapper: { 
		borderRadius: 10, 
		flex: 1, 
		backgroundColor: 'white',
		elevation: 1
	},
	titleButtonWrapper: { 
		flexDirection: 'row', 
		backgroundColor: 'white',
		padding: 15, 
		borderBottomWidth: 1, 
		borderBottomColor: colors.lightGray 
	},

	buttonTextWrapper: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	buttonText: {
		fontFamily: fonts.bold, 
		color: colors.gray, 
		fontSize: 14
	},

	buttonTextSelectable: { 
		fontFamily: fonts.bold, 
		color: colors.blue, 
		fontSize: 14 
	},
	
	titleWrapper: { 
		flex: 4, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	title: { 
		color: colors.black, 
		fontSize: 17 
	},

	timeWrapper: { 
		alignItems: 'center', 
		padding: 8 
	},

	time: { 
		color: colors.googleGray 
	},

	inputWrapper: { 
		flex: 1, 
		paddingTop: 30, 
		paddingBottom: 40,
		paddingHorizontal: 20 
	},

	inputTitle: { 
		fontSize: 24, 
		color: colors.darkGray 
	},

	inputContent: { 
		flex: 1, 
		textAlignVertical: 'top', 
		fontSize: 14, 
		marginTop: 10, 
		color: colors.gray 
	},

	actionButtonWrapper: { 
		padding: 5, 
		flexDirection: 'row' 
	},

	actionButton: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	switchWrapper: { 
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center', 
		flexDirection: 'row' 
	},

	closeButtonWrapper: { 
		alignItems: 'center', 
		justifyContent: 'center', 
		padding: 5, 
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: colors.lightGray
	},

	closeButton: { 
		width: 40, 
		height: 40 
	}
});
