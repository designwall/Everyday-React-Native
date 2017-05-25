import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text } from '@src/components';
import { commentStyle } from './styles';

const PostItem = ({ data, liked, onPressLove, onPressReply, onPressUser }) => {
	return (
		<View style={commentStyle.wrapper}>
			<TouchableOpacity onPress={onPressUser}>
				<Image 
					source={require('@images/avatar_default.jpg')} 
					style={commentStyle.avatar} />
			</TouchableOpacity>

			<View style={commentStyle.commentWrapper}>
				<TouchableOpacity onPress={onPressUser}>
					<Text style={commentStyle.name}>{data.user.name}</Text>
				</TouchableOpacity>
				
				<Text style={commentStyle.comment}>{data.comment.content}</Text>

				<View style={commentStyle.bottomWrapper}>
					<TouchableOpacity onPress={onPressReply}>
						<Text style={commentStyle.reply}>Reply</Text>
					</TouchableOpacity>
					<Text style={commentStyle.timePost}>{data.comment.time}</Text>
				</View>

				<TouchableOpacity style={commentStyle.loveIconWrapper} onPress={onPressLove}>
					<Image 
						source={liked
									? require('@images/heart_s.png') 
									: require('@images/heart.png')} 
						style={commentStyle.loveIcon} />
				</TouchableOpacity>
			</View>
		</View>
	);
};


export default PostItem;
