import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { TextInput, Calendar } from '@src/components';
import styles from './styles';

import PostCard from './PostCard';

class CalendarScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postData: [
				{
					key: 1,
					day: '03',
					month: 'JAN',
					content: 'A slow but sure to start',
					time: 'Tuesday, 11:30 AM'
				}
			]
		};
	}

	onDateSelect(date) {

	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={{ flex: 2 }}>
					<View style={styles.searchWrapper}>
						<TextInput placeholder="🔍 Search through your posts" />
					</View>
					<View style={{ flex: 1 }}>
						<Calendar onDateSelect={this.onDateSelect.bind(this)} />
					</View>
				</View>
				<View style={styles.listWrapper}>
					<FlatList 
						data={this.state.postData}
						renderItem={({ item }) =>
							<PostCard 
								data={item}
								onPress={() => { this.props.navigation.navigate('Post'); }} />
						} />
				</View>
			</View>
		);
	}
}

export default CalendarScreen;
