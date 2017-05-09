import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import globalStyles from '../styles';

const Header = ({ title, iconLeft, iconRight, onPressLeft, onPressRight }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.iconLeftWrapper}>
				<Image source={iconLeft} style={styles.icon} />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={[styles.title, globalStyles.medium]}>{title}</Text>
			</View>
			<View style={styles.iconRightWrapper}>
				<Image source={iconRight} style={styles.icon} />
			</View>
		</View>
	);
};

const { size, colors, fonts } = globalStyles;

const styles = StyleSheet.create({
	wrapper: {
		height: size.toSize(49),
		padding: size.toSize(16),
		marginTop: size.toSize(22),
		flexDirection: 'row',
		backgroundColor: 'transparent'
	},

	icon: {
		width: size.toSize(16),
		height: size.toSize(16)
	},

	titleWrapper: {
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	title: {
		fontFamily: fonts.medium,
		color: colors.white,
		fontSize: size.toSize(22)
	},

	iconLeftWrapper: {
		flex: 1, 
		justifyContent: 'center'
	},

	iconRightWrapper: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'flex-end'
	}
});

export default Header;
