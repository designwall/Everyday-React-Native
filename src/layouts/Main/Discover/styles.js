import { StyleSheet } from 'react-native';
import { size, colors } from '@src/config';

const postItemStyles = StyleSheet.create({
	wrapper: { 
		flexDirection: 'row', 
		marginHorizontal: 16, 
		marginVertical: 10 
	},

	avatarWrapper: { 
		alignItems: 'center', 
		marginRight: 10 
	},

	avatar: { 
		width: 50, 
		height: 50, 
		borderRadius: 25 
	},

	contentWrapper: { 
		justifyContent: 'center' 
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

	contentWrapper: { 
		flex: 1, 
		backgroundColor: colors.lightGray 
	},

	titleWrapper: { 
		width: size.screenWidth, 
		padding: 12, 
		backgroundColor: 'white', 
		flexDirection: 'row' 
	},

	dateWrapper: { 
		flex: 1, 
		justifyContent: 'center' 
	},

	dateIconWrapper: { 
		flex: 1, 
		alignItems: 'flex-end', 
		justifyContent: 'center' 
	}
});

export { postItemStyles };
