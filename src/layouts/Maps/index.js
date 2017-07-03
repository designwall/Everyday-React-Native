import React, { Component } from 'react';
import { View, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Header } from '@src/components';
import styles from './styles';

class Maps extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Image
					source={require('@images/bg_gradient.png')} 
					style={styles.backgroundImg} />
				<View style={styles.viewWrapper}>
					<Header 
						title="Maps" 
						iconLeft={require('@images/arrow_back.png')} 
						onPressLeft={() => { 
							this.props.navigation.goBack(); 
						}} />
					<MapView
						style={styles.map}
						onLongPress={({ coordinate }) => { console.log(coordinate); }} />
				</View>
			</View>
		);
	}
}

export default Maps;
