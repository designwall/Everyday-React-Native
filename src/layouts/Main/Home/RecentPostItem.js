import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Card } from '@src/components';
import { recentPostItem } from './styles';

const RecentPostItem = ({ data, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Card
				style={recentPostItem.wrapper}>

				<View style={{ flexDirection: 'row' }}>
					<Text style={recentPostItem.textBigBlue}>{data.day}</Text>
					<Text style={recentPostItem.textSmallGray}>{data.dayInWeek}</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Text style={recentPostItem.caption}>{data.caption}</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default RecentPostItem;
