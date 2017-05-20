import React, { Component } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TextInput from '../../components/TextInput';
import Card from '../../components/Card';
import Text from '../../components/Text';
import { size, colors, styles } from '../../styles';

class Discover extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postData: [
				{
					key: 1,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'Soaring in the Destiny',
					time: '03:02 PM',
					author: 'Christina Munoz'
				},
				{
					key: 2,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'Lets all be unique together',
					time: '02:27 PM',
					author: 'Jerry Powers'
				},
				{
					key: 3,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'Sometimes, all you need to do...',
					time: '02:46 AM',
					author: 'Ellen Beck'
				},
				{
					key: 4,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'A slow but sure to start.',
					time: '09:29 AM',
					author: 'Adele McKenzie'
				},
				{
					key: 5,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'What was the person thinking...',
					time: '09:29 AM',
					author: 'Garrett Jordan'
				},
				{
					key: 6,
					avatar: require('../../../assets/images/avatar_default.jpg'),
					content: 'First working day of the new year!',
					time: '08:30 AM',
					author: 'Adele McKezie'
				}
			]
		};
	}

	renderPostItem({ item }) {
		return (
			<TouchableOpacity onPress={() => { this.props.navigation.navigate('Post'); }}>
				<Card style={postStyles.wrapper}>
					<View style={postStyles.avatarWrapper}>
						<Image source={item.avatar} style={postStyles.avatar} />
					</View>
					<View style={postStyles.contentWrapper}>
						<Text style={styles.cardTitle}>{item.content}</Text>
						<Text style={styles.cardSubtitle}>{item.time} | {item.author}</Text>
					</View>
				</Card>
			</TouchableOpacity>
		);
	}

	render() {
		const { 
			wrapper, 
			searchWrapper, 
			contentWrapper, 
			titleWrapper, 
			dateWrapper, 
			dateIconWrapper 
		} = discoverStyle;
		
		return (
			<View style={wrapper}>
				<View style={searchWrapper}>
					<TextInput placeholder="🔍 Search for posts and people" />
				</View>
				<View style={contentWrapper}>
					<View style={titleWrapper}>
						<View style={dateWrapper}>
							<Text>04 January 2017</Text>
						</View>
						<View style={dateIconWrapper}>
							<TouchableOpacity onPress={() => {}}>
								<Image source={require('../../../assets/images/calendar_blue.png')} />
							</TouchableOpacity>
						</View>
					</View>
					<FlatList 
						data={this.state.postData} 
						renderItem={this.renderPostItem.bind(this)} />
				</View>
			</View>
		);
	}
}

const postStyles = StyleSheet.create({
	wrapper: { 
		flexDirection: 'row', 
		marginHorizontal: 16, 
		marginVertical: 10 
	},

	avatarWrapper: { 
		alignItems: 'center', 
		marginRight: 10 
	},

	avatar: { 
		width: size.toSize(50), 
		height: size.toSize(50), 
		borderRadius: 1000 
	},

	contentWrapper: { 
		justifyContent: 'center' 
	}
});

const discoverStyle = StyleSheet.create({
		wrapper: { 
			flex: 1, 
			backgroundColor: 'transparent' 
		},

		searchWrapper: { 
			padding: 12 
		},

		contentWrapper: { 
			flex: 1, 
			backgroundColor: colors.lightGray 
		},

		titleWrapper: { 
			width: size.byWidth(1), 
			padding: 12, 
			backgroundColor: 'white', 
			flexDirection: 'row' 
		},

		dateWrapper: { 
			flex: 1, 
			justifyContent: 'center' 
		},

		dateIconWrapper: { 
			flex: 1, 
			alignItems: 'flex-end', 
			justifyContent: 'center' 
		}
});

export default Discover;
