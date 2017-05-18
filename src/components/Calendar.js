import React, { Component } from 'react';
import {  } from 'react-native';

export default class CalendarComponent extends Component {
	render() {
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
				onDateSelect={(date) => { 
					//List all posts the selected day 
				}} 
				showControls />
		);
	}
}