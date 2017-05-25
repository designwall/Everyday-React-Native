import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { fonts, colors, size } from '@src/config';

class TextInputComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			placeholder: true
		};
	}

	render() {
		return (
			<TextInput 
				onChangeText={(text) => { 
					this.setState({ text, placeholder: text.length === 0 });
				}}
				style={[styles.textInput, this.state.placeHolder ? styles.placeholder : styles.text]} 
				placeholder={this.props.placeholder} 
				underlineColorAndroid='rgba(0,0,0,0)' />
		);
	}
	
}

const styles = StyleSheet.create({
	textInput: {
		borderRadius: size.toSize(5), 
		backgroundColor: 'white', 
		padding: size.toSize(5), 
		fontFamily: fonts.regular,
		textAlign: 'center',
		//For ios
		height: size.toSize(30)

	},

	placeHolder: {
		color: colors.lightGray,
	},

	text: {
		color: colors.gray,
	}
});

export default TextInputComponent;
