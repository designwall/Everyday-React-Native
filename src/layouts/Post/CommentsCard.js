import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header, Text } from '@src/components';
import { commentCardStyle } from './styles';
import PostComment from './PostComment';

class CommentsCard extends Component {
	render() {
		const { onPressClose, comments } = this.props;
		return (
			<View style={commentCardStyle.wrapper}>
				<Header 
					title="Comments" 
					titleStyle={commentCardStyle.title} 
					right={<Text style={commentCardStyle.closeButton}>CLOSE</Text>}
					onPressRight={onPressClose} />
				<ScrollView style={commentCardStyle.commentListWrapper}>
					<FlatList 
						data={comments}
						keyExtractor={(item, index) => `${index}`}
						renderItem={({ item }) => 
							<PostComment 
								data={{ 
									user: this.props.users[item.userId],
									comment: item
								}}
								liked={item.likes[this.props.currentUser.id]}
								onPressUser={() => {}}
								onPressReply={() => {}}
								onPRessLove={() => {}} />
						} />
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user,
		users: state.users
	};
};

export default connect(mapStateToProps)(CommentsCard);
