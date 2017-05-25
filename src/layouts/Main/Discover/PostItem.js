import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { Card, Text } from '@src/components';
import { styles } from '@src/config';
import { postItemStyles } from './styles';
 

const PostItem = ({ data, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={postItemStyles.wrapper}>
				<View style={postItemStyles.avatarWrapper}>
					<Image 
						source={data.avatar} 
						style={postItemStyles.avatar} />
				</View>
				<View style={postItemStyles.contentWrapper}>
					<Text style={styles.cardTitle}>
						{data.content}
					</Text>
					<Text style={styles.cardSubtitle}>
						{data.time} | {data.author}
					</Text>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default PostItem;
