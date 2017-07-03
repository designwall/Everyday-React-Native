import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { Card, Text } from '@src/components';
import { styles } from '@src/config';
import { postItemStyles } from './styles';
import { getDate } from '@src/functions';

const PostItem = ({ data, onPress }) => {
	const { user, post } = data;
	const date = getDate(post.time);

	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={postItemStyles.wrapper}>
				<View style={postItemStyles.avatarWrapper}>
					<Image 
						source={user.avatar || require('@images/avatar_default.jpg')} 
						style={postItemStyles.avatar} />
				</View>
				<View style={postItemStyles.contentWrapper}>
					<Text style={styles.cardTitle}>
						{post.title}
					</Text>
					<Text style={styles.cardSubtitle}>
						{date.hour}:{date.minute} | {user.name}
					</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default PostItem;
