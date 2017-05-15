import React, { Component } from 'react';
import { View, Switch, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor'

import { screenAction } from '@src/functions';
import { Text } from '@src/components';
import { size, fonts, colors } from '@src/styles';

class NewPost extends Component {
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

	renderInputArea() {
		const { 
			timeWrapper,
			time,
			inputWrapper,
			inputTitle,
			inputContent
		} = styles;

		this.textEditor = <RichTextEditor ref={(r) => { this.richtext = r; }} />;
		this.textToolbar = <RichTextToolbar getEditor={() => this.richtext} />;
		return (
			<View style={{ flex: 1 }}>
				<View style={timeWrapper}>
					<Text style={time}>Entry for January 4, 2017 | 10:30</Text>
				</View>
				<View style={inputWrapper}>
					{this.textEditor}
					{this.textToolbar}
					{/*
					<TextInput style={inputTitle} placeholder="Add a title" />
					<TextInput 
						multiline 
						style={inputContent} 
						placeholder="Start writing..." />*/}
				</View>
			</View>
		);
	}

	renderActionButtonBar() {
		const { 
			actionButtonWrapper,
			actionButton,
			switchWrapper
		} = styles;

		return (
			<View style={actionButtonWrapper}>
				<View style={actionButton}>
					<TouchableOpacity onPress={() => {}}>
						<Image source={require('@images/calendar.png')} />
					</TouchableOpacity>
				</View>
				<View style={actionButton}>
					<TouchableOpacity onPress={() => {}}>
						<Image source={require('@images/gps.png')} />
					</TouchableOpacity>
				</View>
				<View style={actionButton}>
					<TouchableOpacity onPress={() => { this.richtext.insertImage({ src: 'https://wix.github.io/react-native-navigation/_images/logo.png' }); }}>
						<Image source={require('@images/photo.png')} />
					</TouchableOpacity>
				</View>
				<View style={switchWrapper}>
					<Text>Public </Text>
					<Switch />
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
					<View style={postWrapper}>
						{this.renderTitleBar()}
						{this.renderInputArea()}
						{this.renderActionButtonBar()}
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
