import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';

import { screenAction } from '@src/functions';
import { Text } from '@src/components';
import styles from './styles';

export default class SplashScreen extends Component {
	componentDidMount() {
		TimerMixin.setTimeout(() => {
			this.props.navigation.dispatch(screenAction.replace('Login'));
		}, 3000);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.imageHolderStyle}>
					<Image 
						source={require('@images/app_icon.png')}
						style={styles.icon} />
				</View>
				<View style={styles.textHolderStyle}>
					<Text style={styles.titleStyle}>E V E R Y D A Y</Text>
					<Text style={styles.subtitleStyle}>Memories jotted down</Text>
				</View>
			</View>
		);
	}
}


