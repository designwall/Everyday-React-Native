import React, { Component } from 'react';
import { Text, View, DatePickerIOS, Platform } from 'react-native';
import CalendarComponent from 'react-native-calendar';
import TextInput from '../../components/TextInput';

class Calendar extends Component {

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'transparent' }}>
				<View style={{ padding: 12 }}>
					<TextInput />
				</View>
				<View>
					<CalendarComponent />
				</View>
			</View>
		);
	}
}

export default Calendar;
