import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { size, colors, fonts } from '@src/config';

const Header = ({ title, iconLeft, iconRight, onPressLeft, onPressRight, style, titleStyle, right }) => {
	return (
		<View style={[styles.wrapper, style]}>
			<View style={styles.iconLeftWrapper}>
				<TouchableOpacity onPress={onPressLeft}>
					<Image source={iconLeft} style={styles.icon} />
				</TouchableOpacity>
			</View>
			<View style={styles.titleWrapper}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
			</View>
			<View style={styles.iconRightWrapper}>
				<TouchableOpacity onPress={onPressRight}>
					{iconRight 
						? <Image source={iconRight} style={styles.icon} />
						: right
					}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		height: size.toSize(49),
		padding: size.toSize(16),
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
