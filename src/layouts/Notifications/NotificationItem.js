import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from '@src/components';
import { notificationStyle } from './styles';

const PostItem = ({ data, onPressUser }) => {
	return (
		<View style={notificationStyle.wrapper}>
			<TouchableOpacity onPress={onPressUser}>
				<Image 
					source={require('@images/avatar_default.jpg')} 
					style={notificationStyle.avatar} />
			</TouchableOpacity>

			<View style={notificationStyle.commentWrapper}>
				<TouchableOpacity onPress={onPressUser}>
					<Text style={notificationStyle.name}>{data.user.name}</Text>
				</TouchableOpacity>
				
				<Text style={notificationStyle.comment}>{data.notification.content}</Text>

				<View style={notificationStyle.bottomWrapper}>
					<Text style={notificationStyle.timePost}>{data.notification.time}</Text>
				</View>
			</View>
		</View>
	);
};


export default PostItem;
