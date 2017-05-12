import React, { Component } from 'react';
import { 
	View,
	TouchableOpacity, 
	Image 
} from 'react-native';
import Text from './Text';

import { colors } from '../styles'; 

export default class Button extends Component {
	render() {
		const { 
			icon, 
			iconStyle,
			title, 
			titleStyle,
			onPress,
		} = this.props;

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
					}, this.props.style]}>
					{icon ? <Image source={icon} style={iconStyle} /> : null} 
					<Text style={[{ paddingLeft: 6, color: colors.darkGray }, titleStyle]}> {title}</Text>
				</View>
			</TouchableOpacity>

		);
	}
}
