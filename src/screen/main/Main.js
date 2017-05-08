import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home';
import Calendar from './Calendar';
import Discover from './Discover';
import Profile from './Profile';

const tabInfo = {
	home: {
		icon: require('../../../assets/images/home.png'),
		iconSelected: require('../../../assets/images/home_s.png'),
		title: 'Home',
		display: <Home />
	},
	calendar: {
		icon: require('../../../assets/images/calendar.png'),
		iconSelected: require('../../../assets/images/calendar_s.png'),
		title: 'Calendar',
		display: <Calendar />
	},
	discover: {
		icon: require('../../../assets/images/discover.png'),
		iconSelected: require('../../../assets/images/discover_s.png'),
		title: 'Discover',
		display: <Discover />
	},
	profile: {
		icon: require('../../../assets/images/profile.png'),
		iconSelected: require('../../../assets/images/profile_s.png'),
		title: 'Profile',
		display: <Profile />
	},
};

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 'home'
		};
	}

	renderTab(tagName) {
		const { icon, iconSelected, title, display } = tabInfo[tagName];
		return (
			<TabNavigator.Item
				selected={this.state.selectedTab === tagName}
				title={title}
				renderIcon={() => <Image source={icon} />}
				renderSelectedIcon={() => <Image source={iconSelected} />}
				onPress={() => this.setState({ selectedTab: tagName })}>
				{display}
			</TabNavigator.Item>
		);
	}

	render() {
		return (
			<TabNavigator>
				{this.renderTab('home')}
				{this.renderTab('calendar')}
				{this.renderTab('discover')}
				{this.renderTab('profile')}
			</TabNavigator>
		);
	}
}
