import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Header from '../../components/Header';

import Home from './Home';
import Calendar from './Calendar';
import Discover from './Discover';
import Profile from './Profile';

const { width, height } = Dimensions.get('window');

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
	add: {
		icon: require('../../../assets/images/add.png'),
		iconSelected: require('../../../assets/images/add.png'),
		title: 'add',
		display: null,
		onPress: () => { console.log('Hello'); }
	}
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

	renderAddTab() {
		const { icon, iconSelected, display, onPress } = tabInfo['add'];
		return (
			<TabNavigator.Item
				tabStyle={{ height: 49 * 2 }}
				selected={this.state.selectedTab === 'add'}
				renderIcon={() => <Image source={icon} />}
				renderSelectedIcon={() => <Image source={iconSelected} />}
				onPress={onPress}>
				{display}
			</TabNavigator.Item>
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={require('../../../assets/images/bg_gradient.png')} 
					style={{ width, height: height * (2 / 3) }} />
				<View style={{ width, height, position: 'absolute', top: 0, left: 0 }}>
					<Header 
						iconLeft={require('../../../assets/images/navigator.png')}
						iconRight={require('../../../assets/images/notifications.png')}
						title="Everyday" />
					<TabNavigator 
						tabBarStyle={{ height: 49 * 2, backgroundColor: 'transparent' }}
						tabBarShadowStyle={{ height: 0 }}>
						{this.renderTab('home')}
						{this.renderTab('calendar')}
						{this.renderAddTab()}
						{this.renderTab('discover')}
						{this.renderTab('profile')}
					</TabNavigator>
				</View>
			</View>
		);
	}
}
