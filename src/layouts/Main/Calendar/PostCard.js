import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card } from '@src/components';
import { styles } from '@src/config';

import { cardStyles } from './styles';

const PostCard = ({ data, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={cardStyles.wrapper}>
				<View style={cardStyles.dateWrapper}>
					<Text style={cardStyles.day}>{data.day}</Text>
					<Text style={cardStyles.month}>{data.month}</Text>	
				</View>
				<View style={{ justifyContent: 'center' }}>
					<Text style={styles.cardTitle}>{data.content}</Text>
					<Text style={styles.cardSubtitle}>{data.time}</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default PostCard;
