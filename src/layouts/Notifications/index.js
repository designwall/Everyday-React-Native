import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header, Text } from '@src/components';
import { notificationCardStyle } from './styles';
import NotificationItem from './NotificationItem';

class Notification extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'transparent', flex: 1 }}>
				<View style={notificationCardStyle.wrapper}>
					<Header 
						title="Notifications" 
						titleStyle={notificationCardStyle.title} 
						right={<Text style={notificationCardStyle.closeButton}>CLOSE</Text>}
						onPressRight={() => { this.props.navigation.goBack(); }} />
					<ScrollView style={notificationCardStyle.commentListWrapper}>
						<FlatList 
							data={this.props.currentUser.notifications}
							keyExtractor={(item, index) => `${index}`}
							renderItem={({ item }) => 
								<NotificationItem 
									data={{ 
										user: this.props.users[item.userId],
										notification: item
									}}
									onPressUser={() => {}}
									onPressReply={() => {}}
									onPRessLove={() => {}} />
							} />
					</ScrollView>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.user,
		users: state.users
	};
};

export default connect(mapStateToProps)(Notification);
