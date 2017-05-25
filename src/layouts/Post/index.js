import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { screenAction, getDate } from '@src/functions';
import { Header, Text } from '@src/components';

import styles from './styles';
import CommentsCard from './CommentsCard';


class Post extends Component {

	constructor(props) {
		super(props);

		this.state = {
			titleBarColor: 'transparent',
			showComments: false
		};
	}

	onScroll(e) {
		const currentY = e.nativeEvent.contentOffset.y;
		const currentColor = this.state.titleBarColor;

		if (currentY > 65 && currentColor !== '#FD917C') {
			this.setState({ titleBarColor: '#FD917C' });
		} else if (currentY <= 65 && currentColor !== 'transparent') {
			this.setState({ titleBarColor: 'transparent' });
		}
	}

	renderCommentsCard() {
		return this.state.showComments 
			? <CommentsCard 
				comments={this.props.post.comments}
				onPressClose={() => 
					this.setState({ showComments: false })
				} /> 
			: null;
	}

	renderBottomBar() {
		return (
			<View style={styles.bottombarWrapper}>
				<View style={styles.heartCommentWrapper}>

					<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setState({ showComments: true }); }}>
						<Image 
							source={require('@images/heart.png')} 
							style={styles.heartIcon} />
						<Text style={styles.textIcon}> 342</Text> 
					</TouchableOpacity>

					<TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setState({ showComments: true }); }}>
						<Image 
							source={require('@images/chat.png')} 
							style={styles.commentIcon} />
						<Text style={styles.textIcon}> 20</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.nextButton}>NEXT</Text>
			</View>
		);
	}

	renderAuthor() {
		return this.props.userId === this.props.post.userId
			? <Text style={styles.author}>{this.props.author.name.toUpperCase()}</Text> 
			: null;
	}

	render() {
		const { time, title, content } = this.props.post;
		const date = getDate(time);

		return (
			<View style={{ flex: 1 }}>
				<ScrollView 
					style={{ flex: 1 }} 
					bounces={false} 
					stickyHeaderIndices={[1]} 
					scrollEventThrottle={16}
					onScroll={this.onScroll.bind(this)}>

					<Image 
						source={require('@images/test_bg.png')}
						style={styles.thumbnail}>

						<View style={styles.titleWrapper}>
							<Image
								source={require('@images/time_bg.png')}
								style={styles.dateWrapper}>
								<Text style={styles.postDate}>{date.getDayMonth()}</Text>
							</Image>
							<Text style={styles.postTitle}>{title}</Text>
							{this.renderAuthor()}
						</View>
					</Image>

					<View style={[styles.headerWrapper, { backgroundColor: this.state.titleBarColor }]}>
						<Header 
							iconLeft={require('@images/arrow_back.png')} 
							onPressLeft={() => { 
								this.props.navigation.dispatch(screenAction.back()); 
							}} />
					</View>

					<View style={styles.contentWrapper}>
						<Text style={styles.postTime}>Posted at {date.getFullDate()}</Text>
						<Text style={styles.postContent}>{content}</Text>	
					</View>
				</ScrollView>

				{this.renderBottomBar()}
				{this.renderCommentsCard()}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.user.id,
		post: state.post,
		author: state.users[state.post.userId],
		users: state.users
	};
};

export default connect(mapStateToProps)(Post);
