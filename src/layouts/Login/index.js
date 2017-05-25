import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import { screenAction } from '@src/functions';
import { Text, Swiper, Button } from '@src/components';
import styles from './styles';


class Login extends Component {
	onPressFacebook() {
		this.goToMain();
	}

	onPressGoogle() {
		this.goToMain();
	}

	onPressLogin() {
		this.goToMain();
	}

	onPressSignUp() {
		this.goToMain();
	}

	goToMain() {
		this.props.navigation.dispatch(
			screenAction.replace('Main')
		);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Image
					style={styles.backgroundStyle}
					source={require('@images/bg_gradient.png')}>
					
					<View style={styles.logoWrapper}>
						<Image
							source={require('@images/app_logo.png')}
							style={styles.logo} />
						<Text style={styles.appName}>E V E R Y D A Y</Text>
					</View>

					<View style={{ flex: 2 }}>
						<Swiper data={this.props.sliderData} />
					</View>
				</Image>
				
				<View style={styles.loginHolderStyle}>
					<View style={styles.buttonWrapper}>
						<Button
							style={styles.facebookButton}
							title="Login with Facebook"
							titleStyle={styles.facebookButtonTitle}
							icon={require('@images/facebook.png')}
							iconStyle={styles.facebookButtonIcon}
							onPress={this.onPressFacebook.bind(this)} />
					</View>

					<View style={styles.buttonWrapper}>
						<Button
							style={styles.googleButton}
							title="Login with Google"
							titleStyle={styles.googleButtonTitle}
							icon={require('@images/google.png')}
							iconStyle={styles.googleButtonIcon}
							onPress={this.onPressGoogle.bind(this)} />
					</View>

					<View style={styles.floatButtonsWrapper}>
						<Button
							title="SIGN UP"
							onPress={this.onPressSignUp.bind(this)} />
						<Button
							title="LOGIN"
							titleStyle={styles.selectedText}
							onPress={this.onPressLogin.bind(this)} />
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sliderData: state.sliderLogin
	};
};

export default connect(mapStateToProps)(Login);
