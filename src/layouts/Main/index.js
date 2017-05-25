import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Drawer from 'react-native-drawer';

import { Header } from '@src/components';
import { size } from '@src/config';

import Home from './Home';
import Calendar from './Calendar';
import Discover from './Discover';
import Profile from './Profile';

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
				{React.cloneElement(
					display, 
					{ navigation: this.props.navigation }
				)}
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
			<Drawer
				ref={(ref) => this.drawer = ref}
				content={<View style={{ flex: 1 }}></View>}
				openDrawerOffset={0.2}
				tapToClose>
				<View style={{ flex: 1, backgroundColor: 'white' }}>
					<Image
						source={require('@images/bg_gradient.png')} 
						style={{ width: size.screenWidth, height: size.byHeight(3 / 2) }} />
					<View style={{ width: size.screenWidth, height: size.screenHeight - 20, position: 'absolute', top: statusbarHeight, left: 0, bottom: 0, right: 0 }}>
						<Header 
							iconLeft={require('@images/navigator.png')}
							iconRight={tabInfo[this.state.selectedTab].headerRightIcon}
							title={tabInfo[this.state.selectedTab].title}
							onPressLeft={() => { this.drawer.open(); }}
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
			</Drawer>
		);
	}
}
