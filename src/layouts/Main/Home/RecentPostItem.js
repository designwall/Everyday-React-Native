import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Card } from '@src/components';
import { recentPostItem } from './styles';
import { getDate } from '@src/functions';

const RecentPostItem = ({ data, onPress }) => {
	const { post } = data;
	const date = getDate(Date.parse(post.date));

	return (
		<TouchableOpacity onPress={onPress}>
			<Card
				style={recentPostItem.wrapper}>

				<View style={{ flexDirection: 'row' }}>
					<Text style={recentPostItem.textBigBlue}>{date.date}</Text>
					<Text style={recentPostItem.textSmallGray}>{date.day.substring(0, 3).toUpperCase()}</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Text style={recentPostItem.caption}>{post.title.rendered}</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default RecentPostItem;
