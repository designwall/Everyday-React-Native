import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Calendar from 'react-native-calendar';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import Card from '../../components/Card';

import { fonts, colors, size, styles } from '../../styles';

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
							customStyle={calendarComponentStyle}
							weekStart={0} 
							selectedDayBackground={require('../../../assets/images/circle_s.png')} 
							leftButton={
								<Image 
									source={require('@images/chevron_left_circle.png')}
									style={icon} />
							}
							rightButton={
								<Image 
									source={require('@images/chevron_right_circle.png')}
									style={icon} />
							} 
							onDateSelect={(date) => { 
								//List all posts the selected day 
							}} 
							showControls />
					</View>
				</View>
				<View style={listWrapper}>
					<FlatList 
						data={this.state.postData}
						renderItem={this.renderPostItem} />
				</View>
			</View>
		);
	}
}

const calendarComponentStyle = StyleSheet.create({
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
