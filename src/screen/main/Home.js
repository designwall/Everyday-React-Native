import React, { Component } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import Text from '../../components/Text';

import Card from '../../components/Card';
import gStyles from '../../styles';

const { 
	paddingVertical12, 
	trans50, 
	flex1, 
	flex2, 
	transBg, 
	flexRow,
	alignRight, 
	alignBottom, 
	padding12, 
	fontSize42, 
	bold, 
	thin, 
	medium, 
	orangeText, 
	whiteText,
	lightgrayText
} = gStyles;

const { width, height } = Dimensions.get('window');

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
			]
		};
	}

	renderItem({ item }) {
		const { textBigBlue, textSmallGray } = styles;
		return (
			<Card
				width={width / 2.5}
				height={height / 6}>

				<View style={flexRow}>
					<Text style={[textBigBlue, bold]}>{item.day}</Text>
					<Text style={[textSmallGray, thin]}>{item.dayInWeek}</Text>
				</View>

				<View style={flex1}>
					<Text style={thin}>{item.caption}</Text>
				</View>
			</Card>
		); 
	}

	render() {
		return (
			<View style={[flex1, transBg, { zIndex: 0 }]}>
				<View style={[flex2, transBg, padding12]}>
					<View style={flex1}>

					</View>
					<View style={[flex1, alignBottom]}>
						<Text style={[fontSize42, bold, whiteText]}>
							Add a little 
						</Text>
						<Text style={[fontSize42, bold, orangeText]}>
							confetti
						</Text>
						<Text style={[fontSize42, bold, whiteText]}>
							to each day.
						</Text>

						<Text style={[thin, whiteText, paddingVertical12, trans50]}>
							Need more inspiration? Swipe aside!
						</Text>
					</View>
				</View>

				<View style={styles.wrapper}>
					<View style={flexRow}>
						<View style={flex1}>
							<Text style={medium}>Recent Posts</Text>
						</View>

						<View style={[flex1, alignRight]}>
							<Text style={[medium, lightgrayText]}>JAN 2017</Text>
						</View>
					</View>

					<View>
						<FlatList
							data={this.state.listData}
							renderItem={this.renderItem} 
							keyExtractor={(item) => item.day}
							horizontal
							showsHorizontalScrollIndicator={false} />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textBigBlue: { 
		color: '#82A0FA', 
		fontSize: 32, 
		opacity: 0.5, 
		marginTop: -5 
	},

	textSmallGray: { 
		color: '#C8C8C8', 
		fontSize: 12, 
		paddingLeft: 5 
	},

	wrapper: {
		flex: 1, 
		backgroundColor: '#F5F5F5', 
		paddingVertical: 24, 
		paddingHorizontal: 16
	}	
});

export default Home;
