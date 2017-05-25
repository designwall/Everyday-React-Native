import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput } from '@src/components';
import PostItem from './PostItem';
import styles from './styles';

class Discover extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postData: [
				{
					key: 1,
					avatar: require('@images/avatar_default.jpg'),
					content: 'Soaring in the Destiny',
					time: '03:02 PM',
					author: 'Christina Munoz'
				},
				{
					key: 2,
					avatar: require('@images/avatar_default.jpg'),
					content: 'Lets all be unique together',
					time: '02:27 PM',
					author: 'Jerry Powers'
				},
				{
					key: 3,
					avatar: require('@images/avatar_default.jpg'),
					content: 'Sometimes, all you need to do...',
					time: '02:46 AM',
					author: 'Ellen Beck'
				},
				{
					key: 4,
					avatar: require('@images/avatar_default.jpg'),
					content: 'A slow but sure to start.',
					time: '09:29 AM',
					author: 'Adele McKenzie'
				},
				{
					key: 5,
					avatar: require('@images/avatar_default.jpg'),
					content: 'What was the person thinking...',
					time: '09:29 AM',
					author: 'Garrett Jordan'
				},
				{
					key: 6,
					avatar: require('@images/avatar_default.jpg'),
					content: 'First working day of the new year!',
					time: '08:30 AM',
					author: 'Adele McKezie'
				}
			]
		};
	}

	onCalendarIconPress() {
		//Do something here
	}

	renderPostItem({ item }) {
		return (
			<PostItem
				data={item}
				onPress={() => {
					this.props.navigation.navigate('Post');
				}} />
		);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.searchWrapper}>
					<TextInput placeholder="🔍 Search for posts and people" />
				</View>
				<View style={styles.contentWrapper}>
					<View style={styles.titleWrapper}>
						<View style={styles.dateWrapper}>
							<Text>04 January 2017</Text>
						</View>
						<View style={styles.dateIconWrapper}>
							<TouchableOpacity onPress={this.onCalendarIconPress.bind(this)}>
								<Image source={require('@images/calendar_blue.png')} />
							</TouchableOpacity>
						</View>
					</View>
					<FlatList 
						data={this.state.postData} 
						renderItem={this.renderPostItem.bind(this)} />
				</View>
			</View>
		);
	}
}

export default Discover;
