import React from 'react';
import { View, Image } from 'react-native';

import { Text } from '@src/components';
import { size } from '@src/styles';

const Logo = () => (
	<View style={styles.iconWrapper}>
		<Image
			source={require('@images/app_logo.png')}
			style={styles.icon} />
		<Text style={styles.appName}>E V E R Y D A Y</Text>
	</View>
);

const styles = {
	iconWrapper: { 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	icon: { 
		width: size.toSize(72), 
		height: size.toSize(48) 
	},

	appName: {
		color: 'white',
		fontSize: size.toSize(12),
		marginTop: size.toSize(10),
		backgroundColor: 'transparent'
	}
};

export default Logo;
