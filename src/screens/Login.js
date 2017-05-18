import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { screenAction } from '@src/functions';
import { Text, Swiper, Button } from '@src/components';
import { size, colors, fonts } from '@src/styles';

const sliderData = [
	{ 
		key: '1', 
		title: 'Write Everyday', 
		subtitle: 'Jott down your everyday.' 
	},
	{ 
		key: '2', 
		title: 'Get Inspired', 
		subtitle: 'Fresh inspiration to get you going.' 
	},
	{ 
		key: '3', 
		title: 'Discover Journeys', 
		subtitle: 'Follow people and be part of their life journey.' 
	}
];

export default class Login extends Component {
	render() {
		const { 
			backgroundStyle, 
			appNameStyle, 
			loginHolderStyle,
			buttonWrapper
		} = styles;

		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<Image
					style={backgroundStyle}
					source={require('@images/bg_gradient.png')}>
					
					<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={require('@images/app_logo.png')}
							style={{ width: size.toSize(72), height: size.toSize(48) }} />
						<Text style={appNameStyle}>E V E R Y D A Y</Text>
					</View>

					<View style={{ flex: 2 }}>
						<Swiper data={sliderData} />
					</View>
				</Image>
				
				<View style={loginHolderStyle}>
					<View style={buttonWrapper}>
						<Button
							style={{
								alignSelf: 'stretch',
								backgroundColor: colors.facebookBlue,  
								borderRadius: 2000
							}}
							title="Login with Facebook"
							titleStyle={{ color: colors.white }}
							icon={require('@images/facebook.png')}
							iconStyle={{ width: size.toSize(8), height: size.toSize(16) }}
							onPress={() => { this.props.navigation.dispatch(screenAction.replace('Main')); }} />
					</View>

					<View style={buttonWrapper}>
						<Button
							style={{
								alignSelf: 'stretch',
								backgroundColor: colors.white,  
								borderRadius: 2000,
								borderWidth: 1,
								borderColor: colors.googleGray
							}}
							title="Login with Google"
							titleStyle={{ color: colors.darkGray }}
							icon={require('@images/google.png')}
							iconStyle={{ width: size.toSize(16), height: size.toSize(16) }}
							onPress={() => { this.props.navigation.dispatch(screenAction.replace('Main')); }} />
					</View>

					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<Button
							title="SIGN UP"
							onPress={() => {}} />
						<Button
							title="LOGIN"
							titleStyle={styles.selectedText}
							onPress={() => {}} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	backgroundStyle: {
		flex: 2,
		alignSelf: 'stretch',
		width: null,
		flexDirection: 'column'
	},

	appNameStyle: {
		color: 'white',
		fontSize: size.toSize(12),
		marginTop: size.toSize(10)
	},

	childViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginHolderStyle: {
		flex: 1,
		paddingTop: size.toSize(20)
	},

	buttonWrapper: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: size.toSize(12),
		alignItems: 'center'
	},

	selectedText: {
		color: colors.pink,
		fontFamily: fonts.medium
	}
};
