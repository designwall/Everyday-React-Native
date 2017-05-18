import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';

import { Text } from '@src/components';
import { size, fonts, colors } from '@src/styles';

export default class Picker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedImage: [],
			selectedMenu: null
		};

		this.menu = {
				Calendar: {
					title: 'Select Date',
					display: null
				},
				Location: {
					title: 'Add Location',
					display: null
				},
				Photo: {
					title: 'Add Photo',
					display: 
						<CameraRollPicker 
							backgroundColor="transparent"
							groupTypes="All"
							assetType="All"
							selected={[]}
							maximum={1}
							imageMargin={12} 
							onSelectImage={(image) => {
								this.props.addToInputText('IMAGE', image.uri);
							}} />
				}
		};
	}

	renderMenuDetail() {
		if (this.state.selectedMenu != null && this.inputView != null) {
			const currentElement = this.menu[this.state.selectedMenu];
			return (
				<View 
					style={{ 
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: this.actionBarView.height, 
						right: 0
					}}>
					<View 
						style={{ 
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0, 
							right: 0,
							backgroundColor: 'black',
							opacity: 0.5 
					}} />

					<View 
						style={{ 
							position: 'absolute',
							height: this.inputView.height / 2,
							left: 0,
							bottom: 0, 
							right: 0, 
							backgroundColor: 'white',
							borderTopLeftRadius: 12,
							borderTopRightRadius: 12 
						}}>
							<View 
								style={{ 
									padding: 20, 
									justifyContent: 'center', 
									alignItems: 'center', 
									borderBottomWidth: 1, 
									borderBottomColor: colors.googleGray 
								}}>
								<Text>{currentElement.title}</Text>
								<View style={{ position: 'absolute', right: 20, top: 20 }}>
									<TouchableOpacity onPress={() => { this.setState({ selectedMenu: null }); }}>
										<Text>X</Text>
									</TouchableOpacity>
								</View>
							</View>
							{currentElement.display}
						</View>
				</View>
			);
		}
		return null;
	}

	renderMenuItem() {
		const { 
			actionButtonWrapper,
			actionButton,
			switchWrapper
		} = styles;

		return (
			<View style={{ position: 'absolute', left: 0, bottom: 0, right: 0, backgroundColor: 'white' }}>
				<View 
					style={actionButtonWrapper} 
					onLayout={(event) => {
						this.actionBarView = event.nativeEvent.layout;
					}}>
					<View style={actionButton}>
						<TouchableOpacity onPress={() => { this.setState({ selectedMenu: 'Calendar' }); }}>
							<Image source={require('@images/calendar.png')} />
						</TouchableOpacity>
					</View>
					<View style={actionButton}>
						<TouchableOpacity onPress={() => { this.setState({ selectedMenu: 'Location' }); }}>
							<Image source={require('@images/gps.png')} />
						</TouchableOpacity>
					</View>
					<View style={actionButton}>
						<TouchableOpacity onPress={() => { this.setState({ selectedMenu: 'Photo' }); }}>
							<Image source={require('@images/photo.png')} />
						</TouchableOpacity>
					</View>
					<View style={switchWrapper}>
						<Text>Public </Text>
						<Switch />
					</View>
				</View>
			</View>
		);
	}

	render() {
		return (
			<View 
				style={{ 
					position: 'absolute',
					top: 0,
					left: 0,
					bottom: 0, 
					right: 0
				}}
				onLayout={(event) => {
					this.inputView = event.nativeEvent.layout;
				}}
				pointerEvents="box-none">
				{this.renderMenuDetail()}
				{this.renderMenuItem()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	actionButtonWrapper: { 
		padding: 5, 
		flexDirection: 'row' 
	},

	actionButton: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},

	switchWrapper: { 
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center', 
		flexDirection: 'row' 
	}
});
