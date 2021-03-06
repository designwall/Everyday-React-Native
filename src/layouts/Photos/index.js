import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PostItem from '../Main/Discover/PostItem';
import { Header } from '@src/components';
import styles from './styles';
import { size } from '@src/config';

class Drafs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: [
				'http://data.chiasenhac.com/data/cover/72/71613.jpg',
				'http://data.chiasenhac.com/data/cover/72/71858.jpg',
				'http://data.chiasenhac.com/data/cover/72/71614.jpg',
				'http://data.chiasenhac.com/data/cover/72/71918.jpg',
				'http://data.chiasenhac.com/data/cover/72/71917.jpg',
				'http://data.chiasenhac.com/data/cover/72/71896.jpg',
				'http://data.chiasenhac.com/data/cover/72/71869.jpg'
			]
		};
	}

	renderPostItem({ item }) {
		console.log(item);
		return (
				<Image source={{ uri: item }} style={{ width: size.screenWidth / 2 - 16, height: size.screenHeight / 4, margin: 8 }} />
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
						title="Photos" 
						iconLeft={require('@images/arrow_back.png')} 
						onPressLeft={() => { 
							this.props.navigation.goBack(); 
						}} />
					<View style={styles.contentWrapper}>
						<FlatList 
							data={this.state.photos} 
							renderItem={this.renderPostItem.bind(this)}
							numColumns={2}
							keyExtractor={(item, index) => index} />
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
