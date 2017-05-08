import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ width, height, marginHorizontal, marginVertical, children }) => {
	const cardStyle = (width == null || height == null) 
		? styles.wrapper 
		: [styles.wrapper, { width, height }];
	
	return (
		<View style={cardStyle}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'white', 
		padding: 12,
		borderRadius: 2, 
		marginVertical: 10,
		marginHorizontal: 5,
		elevation: 1
	}
});

export default Card;
