import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../styles';

export default ({ style, children }) => {
	const textStyle = style instanceof Array 
		? [styles.textStyle].concat(style) 
		: [styles.textStyle, style];
	
	return (
		<Text style={textStyle}>{children}</Text>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontFamily: fonts.regular,
		color: colors.gray
	}
});
