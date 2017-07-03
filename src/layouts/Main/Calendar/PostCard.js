import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card } from '@src/components';
import { styles } from '@src/config';
import { cardStyles } from './styles';
import { getDate } from '@src/functions';

const PostCard = ({ data, onPress }) => {
	const date = getDate(data.time);

	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={cardStyles.wrapper}>
				<View style={cardStyles.dateWrapper}>
					<Text style={cardStyles.day}>{date.date}</Text>
					<Text style={cardStyles.month}>{date.month}</Text>	
				</View>
				<View style={{ justifyContent: 'center' }}>
					<Text style={styles.cardTitle}>{data.title}</Text>
					<Text style={styles.cardSubtitle}>{date.day}, {date.hour}:{date.minute}</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default PostCard;
