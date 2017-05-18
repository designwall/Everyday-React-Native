import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@src/styles';

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
		elevation: 1,
		// For ios only
		shadowColor: colors.gray,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 2
	}
});

export default Card;
