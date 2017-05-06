import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ rounded, backgroundColor, textColor, title, onPress, borderWidth, borderColor, icon, iconWidth, iconHeight }) => {
	return (
		<TouchableOpacity
			style={{ flex: 1 }}
			onPress={onPress}
			activeOpacity={0.7}
		>
			<View style={{
				padding: 16,
				backgroundColor: backgroundColor,
				borderRadius: rounded ? 100 : 0,
				borderWidth: borderWidth !== null ? borderWidth : 0,
				borderColor: borderColor !== null ? borderColor : 0,
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row'
			}}>
				{icon !== null ? <Image source={icon} style={{width: iconWidth, height: iconHeight, marginRight: 20 }} /> : null}<Text style={{ color: textColor !== null ? textColor : '#666666' }}> {title}</Text>
			</View>
		</TouchableOpacity>

	);
};

export default Button;