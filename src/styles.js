import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	flexRow: {
		flexDirection: 'row'
	},

	whiteText: {
		color: 'white'
	},

	orangeText: {
		color: '#FFC864'
	},

	grayText: {
		color: '#666666'
	},

	lightgrayText: {
		color: '#999999'
	},

	grayBg: {
		backgroundColor: '#F5F5F5'
	},

	transBg: {
		backgroundColor: 'transparent'
	},

	flex1: {
		flex: 1
	},

	flex2: {
		flex: 2
	},

	flex3: {
		flex: 3
	},

	alignRight: {
		alignItems: 'flex-end'
	},
	
	alignBottom: {
		justifyContent: 'flex-end'
	},

	textBigBlue: { 
		color: '#82A0FA', 
		fontSize: 32, 
		opacity: 0.5, 
		marginTop: -5 
	},

	textSmallGray: { 
		color: '#C8C8C8', 
		fontSize: 12, 
		paddingLeft: 5 
	},

	thin: {
		fontFamily: 'ubuntu-light'
	},

	bold: {
		fontFamily: 'ubuntu-bold'
	},

	medium: {
		fontFamily: 'ubuntu-medium'
	},

	regular: {
		fontFamily: 'ubuntu-regular'
	},

	fontSize12: {
		fontSize: 16
	},

	fontSize42: {
		fontSize: 42
	},

	padding12: {
		padding: 12
	},

	paddingVertical12: {
		paddingVertical: 12
	},

	trans50: {
		opacity: 0.5
	}
});

export default styles;
