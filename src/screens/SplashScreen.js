import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';

import { Text } from '@src/components';
import { size, colors } from '@src/styles';

export default class SplashScreen extends Component {
	constructor() {
		super();

		this.state = {
			nextScreen: false
		};

		this.timeout = null;

		this.goToMain = this.goToMain.bind(this);
	}

	componentDidMount() {
		this.timeout = TimerMixin.setTimeout(this.goToMain, 3000);
	}

	componentDidUpdate() {
		if (this.state.nextScreen) {
			this.props.navigator.replace('Login');
			return null;
		}
	}

	componentWillUnmount() {
		TimerMixin.clearTimeout(this.timeout);
	}

	goToMain = () => {
			this.setState({
				nextScreen: true
			});
	}

	render() {
		const { 
			imageHolderStyle, 
			titleStyle, 
			subtitleStyle, 
			textHolderStyle,
			icon
		} = styles;

		return (
			<View style={{ flex: 1 }}>
				<View style={imageHolderStyle}>
					<Image 
						source={require('@images/app_icon.png')}
						style={icon} />
				</View>
				<View style={textHolderStyle}>
					<Text style={titleStyle}>E V E R Y D A Y</Text>
					<Text style={subtitleStyle}>Memories jotted down</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	icon: {
		width: size.toSize(96), 
		height: size.toSize(96)
	},

	imageHolderStyle: {
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	titleStyle: {
		fontSize: size.toSize(24),
		color: colors.darkGray
		//letterSpacing: 10
	},

	subtitleStyle: {
		color: colors.darkGray
	},

	textHolderStyle: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
};
