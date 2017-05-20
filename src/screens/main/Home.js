import React, { Component } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from '../../components/Text';

import Card from '../../components/Card';
import { size, colors, fonts } from '../../styles';

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
		const { textBigBlue, textSmallGray } = styles;
		
		return (
			<TouchableOpacity onPress={() => { this.props.navigation.navigate('Post'); }}>
				<Card
					style={{ 
						width: size.byWidth(2.7),
						height: size.byWidth(4)
					}}>

					<View style={{ flexDirection: 'row' }}>
						<Text style={textBigBlue}>{item.day}</Text>
						<Text style={textSmallGray}>{item.dayInWeek}</Text>
					</View>

					<View style={{ flex: 1 }}>
						<Text style={{ fontFamily: fonts.thin }}>{item.caption}</Text>
					</View>
				</Card>
			</TouchableOpacity>
		); 
	}

	renderQuote() {
		const wrapper = { 
			flex: 2, 
			backgroundColor: 'transparent', 
			padding: size.toSize(12) 
		};
				

		const divider = {
			height: 1,
			opacity: 0.5,
			backgroundColor: colors.white,
		};

		return (
			<View style={wrapper}>
				<View style={dateStyle.dateWrapper}>
					<Text style={dateStyle.big}>{this.state.today.day}</Text>

					<View>
						<Text style={dateStyle.small}>{this.state.today.dayInWeek}</Text>
						<Text style={dateStyle.small}>{this.state.today.monthYear}</Text>
					</View>

					<View style={dateStyle.chevronWrapper}>
						<TouchableOpacity onPress={() => {}}>
							<Image 
								source={require('../../../assets/images/chevron_right.png')} 
								style={dateStyle.icon} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={divider} />

				<View style={quoteStyle.titleWrapper}>
					<Text style={quoteStyle.title}>
						Add a little 
						{'\n'}
						<Text style={{ color: colors.orange }}>confetti</Text> 
						{'\n'}
						to each day.
					</Text>
					
					<Text style={quoteStyle.subTitle}>Need more inspiration? Swipe aside!</Text>
				</View>
			</View>
		);
	}

	renderRecentPost() {
		const recentTitleWrapper = {
			flex: 1, 
			backgroundColor: colors.lightGray, 
			paddingVertical: size.toSize(24), 
			paddingHorizontal: size.toSize(16)
		};

		return (
			<View style={recentTitleWrapper}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						<Text style={{ fontFamily: fonts.bold }}>Recent Posts</Text>
					</View>

					<View style={{ flex: 1, alignItems: 'flex-end' }}>
						<Text style={{ fontFamily: fonts.medium, color: colors.gray }}>JAN 2017</Text>
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

const styles = StyleSheet.create({
	wrapper: { 
		flex: 1, 
		backgroundColor: 'transparent' 
	},

	textBigBlue: { 
		color: colors.blue, 
		fontFamily: fonts.bold,
		fontSize: size.toSize(36),
		opacity: 0.5, 
		marginTop: -5 
	},

	textSmallGray: { 
		color: colors.gray, 
		fontSize: size.toSize(12), 
		paddingLeft: size.toSize(5)
	}
});

const dateStyle = StyleSheet.create({
	dateWrapper: { 
		flex: 1, 
		flexDirection: 'row', 
		alignItems: 'center' 
	},
	big: { 
		color: colors.white, 
		fontSize: size.toSize(45), 
		fontFamily: fonts.bold, 
		paddingRight: size.toSize(12) 
	},
	small: { 
		color: colors.white, 
		fontSize: size.toSize(16), 
		opacity: 0.7, 
		fontFamily: fonts.medium 
	},
	chevronWrapper: { 
		flex: 1, 
		alignItems: 'flex-end', 
		justifyContent: 'center' 
	},
	icon: { 
		width: size.toSize(7), 
		height: size.toSize(12) 
	}
});

const quoteStyle = StyleSheet.create({
	titleWrapper: {
		flex: 3, 
		justifyContent: 'flex-end' 
	},

	title: {
		fontSize: size.toSize(32), 
		fontFamily: fonts.bold, 
		color: colors.white
	},

	subTitle: {
		fontFamily: fonts.thin, 
		color: colors.white, 
		paddingVertical: size.toSize(12), 
		opacity: 0.5 
	}
});

export default Home;
