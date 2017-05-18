import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RichTextEditor } from 'react-native-zss-rich-text-editor';
import RNFetchBlob from 'react-native-fetch-blob';

import { screenAction } from '@src/functions';
import { Text, Picker } from '@src/components';
import { size, fonts, colors } from '@src/styles';


class NewPost extends Component {
	constructor(props) {
		super(props);

		//this.richtext = null;
	}

	renderTitleBar() {
		const { 
			titleButtonWrapper, 
			buttonTextWrapper,
			buttonText,
			titleWrapper,
			title,
			buttonTextSelectable
		} = styles;

		return (
			<View style={titleButtonWrapper}>
				<View style={buttonTextWrapper}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={buttonText}>SAVE</Text>
					</TouchableOpacity>
				</View>
				<View style={titleWrapper}>
					<Text style={title}>New Post</Text>
				</View>
				<View style={buttonTextWrapper}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={buttonTextSelectable}>DONE</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	addToInputText(type, data) {
		console.log("test");
		if (type === 'IMAGE') {
			//console.log(data);
			//this.richtext.insertImage({ src: 'https://wix.github.io/react-native-navigation/_images/logo.png' });
			
			//this.richtext.insertImage({ src: data });
			RNFetchBlob.fs
				.readFile(data, 'base64')
				.then((base64) => {
					console.log("Test");
					this.richtext.insertImage({ src: `data:image/jpg;base64,${base64}` });
				});
		}
	}

	renderInputArea() {
		const { 
			timeWrapper,
			time,
			inputWrapper
		} = styles;

		return (
			<View 
				style={{ flex: 1 }}>
				
				<View style={timeWrapper}>
					<Text style={time}>
						Entry for January 4, 2017 | 10:30
					</Text>
				</View>
				<View style={inputWrapper}>
					<RichTextEditor 
						ref={(r) => { this.richtext = r; }} 
						initialTitleHTML={'Title!!'}
						initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'} />
				</View>
			</View>
		);
	}

	render() {
		const { 
			wrapper,
			postWrapper,
			closeButtonWrapper,
			closeButton
		} = styles;

		return (
			<View style={{ flex: 1 }}>
				<Image 
					source={require('@images/bg_gradient.png')} 
					style={{ width: size.byWidth(1), height: size.byHeight(1.5) }} />
				<View style={wrapper}>
					{this.renderTitleBar()}
					<View style={postWrapper}>
						{this.renderInputArea()}
						<Picker addToInputText={this.addToInputText.bind(this)} />
					</View>
					<View style={closeButtonWrapper}>
						<TouchableOpacity onPress={() => { this.props.navigation.dispatch(screenAction.back()); }}>
							<Image source={require('@images/close.png')} style={closeButton} />
						</TouchableOpacity>
					</View>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'transparent', 
		flex: 1, 
		position: 'absolute', 
		top: 24, 
		left: 0, 
		bottom: 0, 
		right: 0 
	},
	postWrapper: { 
		borderRadius: 10, 
		flex: 1, 
		backgroundColor: 'white',
		elevation: 1
	},
	titleButtonWrapper: { 
		flexDirection: 'row', 
		backgroundColor: 'white',
		padding: 15, 
		borderBottomWidth: 1, 
		borderBottomColor: 
		colors.lightGray 
	},

	buttonTextWrapper: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	buttonText: {
		fontFamily: fonts.bold, 
		color: colors.gray, 
		fontSize: 14
	},

	buttonTextSelectable: { 
		fontFamily: fonts.bold, 
		color: colors.blue, 
		fontSize: 14 
	},
	
	titleWrapper: { 
		flex: 4, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	title: { 
		color: colors.black, 
		fontSize: 17 
	},

	timeWrapper: { 
		alignItems: 'center', 
		padding: 8 
	},

	time: { 
		color: colors.googleGray 
	},

	inputWrapper: { 
		flex: 1, 
		paddingTop: 30, 
		paddingBottom: 40,
		paddingHorizontal: 20 
	},

	inputTitle: { 
		fontSize: 24, 
		color: colors.darkGray 
	},

	inputContent: { 
		flex: 1, 
		textAlignVertical: 'top', 
		fontSize: 14, 
		marginTop: 10, 
		color: colors.gray 
	},

	actionButtonWrapper: { 
		padding: 5, 
		flexDirection: 'row' 
	},

	actionButton: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	switchWrapper: { 
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center', 
		flexDirection: 'row' 
	},

	closeButtonWrapper: { 
		alignItems: 'center', 
		justifyContent: 'center', 
		padding: 5, 
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: colors.lightGray
	},

	closeButton: { 
		width: 40, 
		height: 40 
	}
});

export default NewPost;
