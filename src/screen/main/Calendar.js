import React, { Component } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Calendar from 'react-native-calendar';
import TextInput from '../../components/TextInput';
import Card from '../../components/Card';

import { fonts, colors, size } from '../../styles';

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
			<Card style={{ flexDirection: 'row', marginHorizontal: 16, marginVertical: 10 }}>
				<View style={{ alignItems: 'center', marginRight: 10 }}>
					<Text style={{ color: colors.blue, opacity: 0.5, fontSize: 30, fontFamily: fonts.bold }}>{item.day}</Text>
					<Text style={{ color: colors.blue, opacity: 0.5, fontSize: 12, fontFamily: fonts.bold, marginTop: -5 }}>{item.month}</Text>	
				</View>
				<View style={{ justifyContent: 'center' }}>
					<Text style={{ color: colors.darkGray, fontFamily: fonts.medium, fontSize: 16 }}>{item.content}</Text>
					<Text style={{ color: colors.gray, fontFamily: fonts.regular, fontSize: 12 }}>{item.time}</Text>
				</View>
			</Card>
		);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'transparent' }}>
				<View style={{ flex: 2 }}>
					<View style={{ padding: 12 }}>
						<TextInput />
					</View>
					<View style={{ flex: 1 }}>
						<Calendar 
							customStyle={calendarStyle}
							weekStart={0} 
							selectedDayBackground={require('../../../assets/images/circle_s.png')} 
							leftButton={<Entypo name="chevron-small-left" size={size.toSize(24)} color={colors.gray} style={{ opacity: 0.25 }} />}
							rightButton={<Entypo name="chevron-small-right" size={size.toSize(24)} color={colors.gray} style={{ opacity: 0.25 }} />} 
							onDateSelect={(date) => { 
								//List all posts the selected day 
							}} 
							showControls />
					</View>
				</View>
				<View style={{ flex: 1, backgroundColor: colors.lightGray }}>
					<FlatList 
						data={this.state.postData}
						renderItem={this.renderPostItem} />
				</View>
			</View>
		);
	}
}

const calendarStyle = StyleSheet.create({
	calendarContainer: {
		flex: 1,
		backgroundColor: colors.white,
    },

	title: {
		fontFamily: fonts.medium,
		color: colors.blue,
    },

	calendarHeading: {
		borderTopWidth: 0,
		borderBottomWidth: 0
    },

	dayButton: {
		borderTopWidth: 0
    },

	dayCircleImageStyle: {
		justifyContent: 'center', 
		alignItems: 'center', 
		width: size.toSize(24), 
		height: size.toSize(24)
	},

	weekendDayText: {
		fontFamily: fonts.regular,
		color: colors.darkGray,
    },

	day: {
		fontFamily: fonts.regular,
		color: colors.darkGray,
    },

	dayHeading: {
		fontFamily: fonts.medium,
		color: colors.darkGray,
    },

	weekendHeading: {
		fontFamily: fonts.medium,
		color: colors.darkGray,
    },
});

export default CalendarScreen;
