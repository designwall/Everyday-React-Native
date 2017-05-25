import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RichTextEditor } from 'react-native-zss-rich-text-editor';
import RNFetchBlob from 'react-native-fetch-blob';

import { screenAction } from '@src/functions';
import { Text, Picker } from '@src/components';
import styles from './styles';


class NewPost extends Component {
	addToInputText(type, data) {
		if (type === 'IMAGE') {
			RNFetchBlob.fs
				.readFile(data, 'base64')
				.then((base64) => {
					this.richtext.insertImage({ 
						src: `data:image/jpg;base64,${base64}` 
					});
				});
		}
	}

	renderTitleBar() {
		return (
			<View style={styles.titleButtonWrapper}>
				<View style={styles.buttonTextWrapper}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.buttonText}>SAVE</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>New Post</Text>
				</View>
				<View style={styles.buttonTextWrapper}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.buttonTextSelectable}>DONE</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	renderInputArea() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.timeWrapper}>
					<Text style={styles.time}>
						Entry for January 4, 2017 | 10:30
					</Text>
				</View>
				<View style={styles.inputWrapper}>
					<RichTextEditor 
						ref={(r) => { this.richtext = r; }} 
						initialTitleHTML={'Title!!'}
						initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'} />
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image 
					source={require('@images/bg_gradient.png')} 
					style={styles.wrapperImageBg} />

				<View style={styles.wrapper}>
					{this.renderTitleBar()}

					<View style={styles.postWrapper}>
						{this.renderInputArea()}
						<Picker addToInputText={this.addToInputText.bind(this)} />
					</View>

					<View style={styles.closeButtonWrapper}>
						<TouchableOpacity 
							onPress={() => { 
								this.props.navigation.dispatch(screenAction.back()); 
							}}>
							<Image 
								source={require('@images/close.png')} 
								style={styles.closeButton} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default NewPost;
