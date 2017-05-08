import React from 'react';
import { Text } from 'react-native';
import gStyles from '../styles';

export default ({ style, children }) => {
	const { regular, grayText } = gStyles;
	const textStyle = style instanceof Array 
		? [regular, grayText].concat(style) 
		: [regular, grayText, style];
	
	return (
		<Text style={textStyle}>{children}</Text>
	);
};

