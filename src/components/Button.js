import React, { Component } from 'react';
import { 
	View, 
	Text, 
	TouchableOpacity, 
	Image 
} from 'react-native';

export default class Button extends Component {
	renderIcon() {
		const { icon, iconWidth, iconHeight } = this.props;
		return icon !== null
			?	
				<Image 
					source={icon} 
					style={{ width: iconWidth, height: iconHeight, marginRight: 20 }} /> 
			: null;
	}

	render() {
		const { 
			rounded, 
			backgroundColor, 
			textColor, title, 
			onPress, 
			borderWidth, 
			borderColor
		} = this.props;

		return (
			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={onPress}
				activeOpacity={0.7}>
				<View 
					style={{
						padding: 16,
						backgroundColor,
						borderRadius: rounded ? 100 : 0,
						borderWidth: borderWidth !== null ? borderWidth : 0,
						borderColor: borderColor !== null ? borderColor : 0,
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row'
					}}>
					{this.renderIcon()} 
					<Text style={{ color: textColor !== null ? textColor : '#666666' }}> {title}</Text>
				</View>
			</TouchableOpacity>

		);
	}
}
