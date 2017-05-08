import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Swiper from '../../src/components/Swiper';
import Button from '../../src/components/Button';

const img = {
	background: require('../../assets/images/bg_gradient.png'),
	logo: require('../../assets/images/app_logo.png'),
	ic_facebook: require('../../assets/images/facebook.png'),
	ic_google: require('../../assets/images/google.png'),
};

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
			loginHolderStyle
		} = styles;

		return (
			<View style={{ flex: 1 }}>
				<Image
					style={backgroundStyle}
					source={img.background}>
					
					<View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={img.logo}
							style={{ width: 72, height: 48 }} />
						<Text style={appNameStyle}>E V E R Y D A Y</Text>
					</View>

					<View style={{ flex: 2 }}>
						<Swiper data={sliderData} />
					</View>
				</Image>
				
				<View style={loginHolderStyle}>
					<View style={{ padding: 10 }} />

					<View style={{ flex: 1, padding: 12 }}>
						<Button
							title="Login with Facebook"
							backgroundColor="#3B5999"
							textColor="#FFFFFF"
							icon={img.ic_facebook}
							iconWidth={10}
							iconHeight={20}
							onPress={() => {}}
							rounded />
					</View>

					<View style={{ flex: 1, padding: 12 }}>
						<Button
							title="Login with Google"
							backgroundColor="#FFFFFF"
							textColor="#666666"
							icon={img.ic_google}
							iconWidth={19}
							iconHeight={20}
							borderWidth={1}
							borderColor="#E6E6E6"
							onPress={() => {}}
							rounded />
					</View>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<Button
							title="SIGN UP"
							onPress={() => {}} />
						<Button
							title="LOGIN"
							textColor="#FD8C7E"
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
		fontSize: 12,
		marginTop: 10
	},

	childViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	loginHolderStyle: {
		flex: 1
	}
};
