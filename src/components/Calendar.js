import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar';
import { fonts, colors, size } from '@src/config';

export default class CalendarComponent extends Component {
	render() {
		const icon = { 
			width: size.toSize(23),
			height: size.toSize(23)
		};

		return (
			<Calendar 
				customStyle={calendarComponentStyle}
				weekStart={0} 
				selectedDayBackground={require('@images/circle_s.png')} 
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
				onDateSelect={this.props.onDateSelect} 
				showControls />
		);
	}
}

const calendarComponentStyle = StyleSheet.create({
	calendarContainer: {
		flex: 1,
		backgroundColor: colors.white,
    },

	selectedDayText: {
		backgroundColor: 'transparent'
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
