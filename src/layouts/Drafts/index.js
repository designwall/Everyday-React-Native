import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PostItem from '../Main/Discover/PostItem';
import { Header } from '@src/components';
import styles from './styles';

class Drafs extends Component {
	renderPostItem({ item }) {
		const currentUserId = this.props.currentUserId;
		const user = this.props.users[item.userId];
		const post = item; 

		return (
			<PostItem
				data={{ user, post }}
				onPress={() => {
					this.props.navigation.navigate('Post', { currentUserId, user, post });
				}} />
		);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Image
					source={require('@images/bg_gradient.png')} 
					style={styles.backgroundImg} />
				<View style={styles.viewWrapper}>
					<Header 
						title="Drafts" 
						iconLeft={require('@images/arrow_back.png')} 
						onPressLeft={() => { 
							this.props.navigation.goBack(); 
						}} />
					<View style={styles.contentWrapper}>
						<FlatList 
							data={this.props.posts} 
							renderItem={this.renderPostItem.bind(this)}
							keyExtractor={(item) => item.id} />
						</View>
					</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		posts: state.posts
	};
};

export default connect(mapStateToProps)(Drafs);
