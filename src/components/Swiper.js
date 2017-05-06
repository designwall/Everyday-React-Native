import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window');

export default class SwiperComponent extends Component {
	renderSwiper(items) {
		
		const { titleStyle, subtitleStyle, itemStyle } = styles;

		return items.map(({ key, title, subtitle }) => {
			return (
				<View key={key} style={itemStyle}>
					<Text style={titleStyle}>
						{title}
					</Text>
					
					<Text style={subtitleStyle}>
						{subtitle}
					</Text>
				</View>
			);
		});
	}

	render() {
		const { dot, dotActive } = styles;

		return (
			<Swiper
				height={height * 4/15}
				dotStyle={dot}
				activeDotStyle={dotActive}
				showsPagination
			>
				{this.renderSwiper(this.props.data)}
			</Swiper>
		);
	}
};

const styles = {
	dot: {
		backgroundColor:'white', 
		width: 8, 
		height: 8,
		borderRadius: 4, 
		marginLeft: 3, 
		marginRight: 3, 
		marginTop: 3, 
		marginBottom: 3,
		opacity: 0.3
	},

	dotActive: {
		backgroundColor:'white', 
		width: 8, 
		height: 8,
		borderRadius: 4, 
		marginLeft: 3, 
		marginRight: 3, 
		marginTop: 3, 
		marginBottom: 3
	},

	titleStyle: {
		fontSize: 30,
		color: 'white'
	},

	itemStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	subtitleStyle: {
		color: 'white'
	},
};
