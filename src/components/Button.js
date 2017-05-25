import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { colors } from '@src/config'; 
import Text from './Text';

const Button = ({ icon, iconStyle, title, titleStyle, onPress, style }) => {
	return (
		<TouchableOpacity
			style={{ flex: 1 }}
			onPress={onPress}
			activeOpacity={0.7}>
			<View 
				style={[{
					padding: 16,
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row'
				}, style]}>
				{icon ? <Image source={icon} style={iconStyle} /> : null} 
				<Text style={[{ paddingLeft: 6, color: colors.darkGray }, titleStyle]}> {title}</Text>
			</View>
		</TouchableOpacity>

	);
};

export default Button;

