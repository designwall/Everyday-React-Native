import React, { Component } from 'react';
import { View, Image, Dimensions, StatusBar, Platform } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Header from '../../components/Header';

import Home from './Home';
import Calendar from './Calendar';
import Discover from './Discover';
import Profile from './Profile';

import { size } from '@src/styles';

const { width, height } = Dimensions.get('window');

const tabInfo = {
	home: {
		icon: require('@images/home.png'),
		iconSelected: require('@images/home_s.png'),
		title: 'Everyday',
		headerRightIcon: require('@images/notifications.png'),
		onPressHeaderRightIcon: () => {},
		display: <Home />
	},
	calendar: {
		icon: require('@images/calendar.png'),
		iconSelected: require('@images/calendar_s.png'),
		title: 'Calendar',
		headerRightIcon: require('@images/view_day.png'),
		onPressHeaderRightIcon: () => {},
		display: <Calendar />
	},
	discover: {
		icon: require('@images/discover.png'),
		iconSelected: require('@images/discover_s.png'),
		title: 'Discover',
		headerRightIcon: require('@images/notifications.png'),
		onPressHeaderRightIcon: () => {},
		display: <Discover />
	},
	profile: {
		icon: require('@images/profile.png'),
		iconSelected: require('@images/profile_s.png'),
		title: 'Profile',
		headerRightIcon: require('@images/settings.png'),
		onPressHeaderRightIcon: () => {},
		display: <Profile />
	},
	add: {
		icon: require('@images/add.png'),
		iconSelected: require('@images/add.png'),
		title: 'add',
		display: null
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
		const { icon, iconSelected, display } = tabInfo[tagName];
		return (
			<TabNavigator.Item
				selected={this.state.selectedTab === tagName}
				renderIcon={() => <Image source={icon} />}
				renderSelectedIcon={() => <Image source={iconSelected} />}
				onPress={() => this.setState({ selectedTab: tagName })}>
				{display}
			</TabNavigator.Item>
		);
	}

	renderAddTab() {
		const { icon, iconSelected, display } = tabInfo.add;
		return (
			<TabNavigator.Item
				tabHeight={49 * 2}
				selected={this.state.selectedTab === 'add'}
				renderIcon={() => <Image source={icon} />}
				renderSelectedIcon={() => <Image source={iconSelected} />}
				onPress={() => { this.props.navigation.navigate('NewPost'); }}
				hidesTabTouch>
				{display}
			</TabNavigator.Item>
		);
	}

	render() {
		const statusbarHeight = StatusBar.currentHeight;
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<Image
					source={require('@images/bg_gradient.png')} 
					style={{ width, height: height * (2 / 3) }} />
				<View style={{ width, height: height - 20, position: 'absolute', top: statusbarHeight, left: 0, bottom: 0, right: 0 }}>
					<Header 
						iconLeft={require('@images/navigator.png')}
						iconRight={tabInfo[this.state.selectedTab].headerRightIcon}
						title={tabInfo[this.state.selectedTab].title}
						onPressRight={tabInfo[this.state.selectedTab].onPressHeaderRightIcon} />
					<TabNavigator 
						tabBarStyle={{ height: 49 * 2 }}
						shadowStyle={{ backgroundColor: 'transparent' }}>
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
