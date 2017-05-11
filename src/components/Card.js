import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ style, children }) => {
	const cardStyle = [styles.wrapper, style];
	
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
