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
	blue: '#82A0FA',
	pink: '#FD8C7E',
	facebookBlue: '#3B5999',
	googleGray: '#E6E6E6'
};

const fonts = {
	thin: 'Ubuntu-L',
	bold: 'Ubuntu-B',
	medium: 'Ubuntu-M',
	regular: 'Ubuntu-R',
	italic: 'Ubuntu-RI'
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
