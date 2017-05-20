import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import { Text, TextInput, Card, Calendar } from '@src/components';
import { fonts, colors, size, styles } from '@src/styles';

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

	renderPostItem({ item }) {
		return (
			<TouchableOpacity onPress={() => { this.props.navigation.navigate('Post'); }}>
				<Card style={cardStyles.wrapper}>
					<View style={cardStyles.dateWrapper}>
						<Text style={cardStyles.day}>{item.day}</Text>
						<Text style={cardStyles.month}>{item.month}</Text>	
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Text style={styles.cardTitle}>{item.content}</Text>
						<Text style={styles.cardSubtitle}>{item.time}</Text>
					</View>
				</Card>
			</TouchableOpacity>
		);
	}

	render() {
		const { wrapper, searchWrapper, icon, listWrapper } = calendarStyle;
		
		return (
			<View style={wrapper}>
				<View style={{ flex: 2 }}>
					<View style={searchWrapper}>
						<TextInput placeholder="🔍 Search through your posts" />
					</View>
					<View style={{ flex: 1 }}>
						<Calendar 
							onDateSelect={(date) => {}} />
					</View>
				</View>
				<View style={listWrapper}>
					<FlatList 
						data={this.state.postData}
						renderItem={this.renderPostItem.bind(this)} />
				</View>
			</View>
		);
	}
}



const cardStyles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row', 
		marginHorizontal: 16, 
		marginVertical: 10
	},

	dateWrapper: {
		alignItems: 'center', 
		marginRight: 10
	},

	day: { 
		color: colors.blue, 
		opacity: 0.5, 
		fontSize: 30, 
		fontFamily: fonts.bold 
	},

	month: {
		color: colors.blue, 
		opacity: 0.5, 
		fontSize: 12, 
		fontFamily: fonts.bold, 
		marginTop: -5
	}
});

const calendarStyle = StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'transparent' 
	},

	searchWrapper: { 
		padding: 12 
	},

	icon: { 
		width: size.toSize(23),
		height: size.toSize(23)
	},

	listWrapper: { 
		flex: 1, 
		backgroundColor: colors.lightGray 
	}
});

export default CalendarScreen;
