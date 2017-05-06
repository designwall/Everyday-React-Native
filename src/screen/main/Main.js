import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home';
import Calendar from './Calendar';
import Discover from './Discover';
import Profile from './Profile';

export default class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			selectedTab: 'home'
		}
	}

	render() {
		return (
			<TabNavigator>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'home'}
					title="Home"
					renderIcon={() => <Image source={require('@assets/images/home.png')} />}
					renderSelectedIcon={() => <Image source={require('@assets/images/home_s.png')} />}
					onPress={() => this.setState({ selectedTab: 'home' })}>
					<Home />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'calendar'}
					title="Profile"
					renderIcon={() => <Image source={require('@assets/images/calendar.png')} />}
					renderSelectedIcon={() => <Image source={require('@assets/images/calendar_s.png')} />}
					onPress={() => this.setState({ selectedTab: 'calendar' })}>
					<Calendar />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'discover'}
					title="Profile"
					renderIcon={() => <Image source={require('@assets/images/discovery.png')} />}
					renderSelectedIcon={() => <Image source={require('@assets/images/discovery_s.png')} />}
					onPress={() => this.setState({ selectedTab: 'discover' })}>
					<Discover />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					title="Profile"
					renderIcon={() => <Image source={require('@assets/images/profile.png')} />}
					renderSelectedIcon={() => <Image source={require('@assets/images/profile_s.png')} />}
					onPress={() => this.setState({ selectedTab: 'profile' })}>
					<Profile />
				</TabNavigator.Item>
			</TabNavigator>
		);
	}
}