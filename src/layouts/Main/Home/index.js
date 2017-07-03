import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from '@src/components';
import RecentPostItem from './RecentPostItem';
import styles, { currentDate, quoteStyle } from './styles';
import { updateRecentPosts } from '@src/config/actions';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			today: {
				day: '05',
				dayInWeek: 'Thursday',
				monthYear: 'Jan 2017'
			},

		};
	}

	componentWillMount() {
		const currentYear = new Date().getFullYear();

		const orderBy = 'date';
		const order = 'desc';
		const limit = 5;
		const dateFrom = `${currentYear}-01-01T00:00:00`;
		const dateTo = `${currentYear}-12-31T11:59:59`;

		fetch(`https://blog-mrp.rhcloud.com/wp-json/wp/v2/posts?orderby=${orderBy}&order=${order}&per_page=${limit}&after=${dateFrom}&before=${dateTo}`)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.props.updateRecentPosts(responseJson);
			})
			.catch((e) => console.log(e));
	}

	renderRecentPostItem({ item }) {
		const currentUserId = this.props.currentUserId;
		const user = this.props.user;
		const post = item; 
		
		return (
			<RecentPostItem
				data={{ user, post }}
				onPress={() => { 
					this.props.navigation.navigate('Post', { currentUserId, user, post }); 
				}} />
		); 
	}

	renderQuote() {
		return (
			<View style={quoteStyle.wrapper}>
				<View style={currentDate.dateWrapper}>
					<Text style={currentDate.big}>{this.state.today.day}</Text>

					<View>
						<Text style={currentDate.small}>{this.state.today.dayInWeek}</Text>
						<Text style={currentDate.small}>{this.state.today.monthYear}</Text>
					</View>

					<View style={currentDate.chevronWrapper}>
						<TouchableOpacity onPress={() => {}}>
							<Image 
								source={require('@images/chevron_right.png')} 
								style={currentDate.icon} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={quoteStyle.divider} />

				<View style={quoteStyle.titleWrapper}>
					<Text style={quoteStyle.title}>
						Add a little 
						{'\n'}
						<Text style={quoteStyle.titleOrange}>confetti</Text> 
						{'\n'}
						to each day.
					</Text>
					
					<Text style={quoteStyle.subTitle}>Need more inspiration? Swipe aside!</Text>
				</View>
			</View>
		);
	}

	renderRecentPost() {
		return (
			<View style={styles.recentTitleWrapper}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.recentPostLabelWrapper}>
						<Text style={styles.recentPostLabel}>Recent Posts</Text>
					</View>

					<View style={styles.recentPostDataWrapper}>
						<Text style={styles.recentPostData}>JAN 2017</Text>
					</View>
				</View>

				<View>
					<FlatList
						data={this.props.recentPosts}
						renderItem={this.renderRecentPostItem.bind(this)} 
						keyExtractor={(item) => item.id}
						horizontal
						showsHorizontalScrollIndicator={false} />
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				{this.renderQuote()}
				{this.renderRecentPost()}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		recentPosts: state.recentPosts
	};
};

export default connect(mapStateToProps, { updateRecentPosts })(Home);
