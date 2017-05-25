import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from '@src/components';
import RecentPostItem from './RecentPostItem';
import styles, { currentDate, quoteStyle } from './styles';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listData: [
				{
					day: '04',
					dayInWeek: 'WED',
					caption: 'Almost start!!'
				},
				{
					day: '03',
					dayInWeek: 'TUE',
					caption: 'A slow but sure start.'
				},
				{
					day: '02',
					dayInWeek: 'MON',
					caption: 'First working day of the new year!'
				},
				{
					day: '01',
					dayInWeek: 'SUN',
					caption: 'What a way to start the year :)'
				}
			],
			today: {
				day: '05',
				dayInWeek: 'Thursday',
				monthYear: 'Jan 2017'
			}
		};
	}

	renderRecentPostItem({ item }) {
		return (
			<RecentPostItem
				data={item}
				onPress={() => { 
					this.props.navigation.navigate('Post'); 
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
						data={this.state.listData}
						renderItem={this.renderRecentPostItem.bind(this)} 
						keyExtractor={(item) => item.day}
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

export default Home;
