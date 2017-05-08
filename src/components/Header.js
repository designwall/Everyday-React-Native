import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Text from './Text';
import gStyles from '../styles';

const { height } = Dimensions.get('window');

const Header = ({ title, iconLeft, iconRight, onPressLeft, onPressRight }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.iconLeftWrapper}>
				<Image source={iconLeft} style={styles.icon} />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={[styles.title, gStyles.medium]}>{title}</Text>
			</View>
			<View style={styles.iconRightWrapper}>
				<Image source={iconRight} style={styles.icon} />
			</View>
		</View>
	);
};

const styles = {
	wrapper: {
		height: height / 8,
		flexDirection: 'row',
		paddingTop: 20,
		backgroundColor: 'transparent'
	},

	icon: {
		width: 24,
		height: 24
	},

	titleWrapper: {
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	title: {
		color: 'white',
		fontSize: 20
	},

	iconLeftWrapper: {
		flex: 1, 
		justifyContent: 'center',
		paddingLeft: 20
	},

	iconRightWrapper: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 20
	}
};

export default Header;
