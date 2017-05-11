import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const size = {
	byWidth: (num) => width / num,
	byHeight: (num) => height / num,
	toSize: (num) => width / 350 * num,
};

const colors = {
	white: '#FFFFFF',
	orange: '#FFC864',
	darkGray: '#666666',
	gray: '#999999',
	lightGray: '#F5F5F5',
	blue: '#82A0FA'
};

const fonts = {
	thin: 'ubuntu-light',
	bold: 'ubuntu-bold',
	medium: 'ubuntu-medium',
	regular: 'ubuntu-regular',
	italic: 'ubuntu-italic'
};

const styles = StyleSheet.create({
	cardTitle: {
		color: colors.darkGray, 
		fontFamily: fonts.medium, 
		fontSize: 16
	},
	cardSubtitle: {
		color: colors.gray, 
		fontFamily: fonts.regular, 
		fontSize: 12
	}
});

export {  
	size,
	colors,
	fonts,
	styles
};
