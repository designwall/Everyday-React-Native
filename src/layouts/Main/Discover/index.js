import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput } from '@src/components';
import PostItem from './PostItem';
import styles from './styles';

class Discover extends Component {

	onCalendarIconPress() {
		//Do something here
	}

	renderPostItem({ item }) {
		const currentUserId = this.props.currentUserId;
		const user = this.props.users[item.userId];
		const post = item; 
		return (
			<PostItem
				data={{ user, post }}
				onPress={() => {
					this.props.navigation.navigate('Post', { currentUserId, user, post });
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
						data={this.props.posts} 
						renderItem={this.renderPostItem.bind(this)}
						keyExtractor={(item) => item.id} />
				</View>
			</View>
		);
	}
}

export default Discover;
