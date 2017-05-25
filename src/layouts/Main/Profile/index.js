import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Svg, { Circle, Polygon } from 'react-native-svg';
import { size } from '@src/config';

import { Text, Card } from '@src/components';
import styles, { profile, menuIcon } from './styles';


const cWrapper = {
	x: size.byWidth(2),
	y: ((size.byHeight(7) + size.byHeight(4)) / 2) - 10, // 1/7 + 10px + (1/4 - 1/7) / 2
	r: size.byWidth(6)
};
const cImage = {
	x: cWrapper.x,
	y: cWrapper.y, 
	r: cWrapper.r - 10
};


class Profile extends Component {

	renderProfileBackground() {
		const { user } = this.props;
		return (
			<View style={profile.wrapper}>
				<View>
					<Svg
						height={size.byHeight(4)}
						width={size.screenWidth}>
						<Polygon
							points={
								`0,${size.byHeight(4) - 10} ` +							//Top Left
								`${size.byWidth(1)},${size.byHeight(7) - 10} ` +			//Top Right
								`${size.byWidth(1)},${size.byHeight(4)} ` +						//Bottom Left
								`0,${size.byHeight(4)}`											//Bottom Right
							}
							fill="white" />
						<Circle
							cx={cWrapper.x}
							cy={cWrapper.y}
							r={cWrapper.r} 
							fillOpacity="0.25"
							fill="white" />
						<Circle
							cx={cImage.x}
							cy={cImage.y}
							r={cImage.r}
							fill="white" />
					</Svg>
				</View>

				<View style={profile.profileWrapper}>
					<View style={profile.nameWrapper}>
						<Text style={profile.name}>{user.name}</Text>
						<Text style={profile.quote}>{user.quote}</Text>
					</View>
					<View style={profile.infoWrapper}>
						<View style={profile.infoItemWrapper}>
							<Text style={profile.infoNumberWrapper}>{user.posts}</Text>
							<Text style={profile.infoLabelWrapper}>POSTS</Text>
						</View>
						<View style={profile.infoItemWrapper}>
							<Text style={profile.infoNumberWrapper}>{user.followers}</Text>
							<Text style={profile.infoLabelWrapper}>FOLLOWERS</Text>
						</View>
						<View style={profile.infoItemWrapper}>
							<Text style={profile.infoNumberWrapper}>{user.following}</Text>
							<Text style={profile.infoLabelWrapper}>FOLLOWING</Text>
						</View>
					</View>
				</View>
				<View style={{ position: 'absolute', top: cImage.y - cImage.r, left: cImage.x - cImage.r }}>
					<Image 
						source={require(user.avatar)} // Just for the demo, must change to { uri: <link> }
						style={{ width: cImage.r * 2, height: cImage.r * 2, borderRadius: cImage.r }} />
				</View>
			</View>
		);
	}

	renderMenuItem(icon, text) {
		return (
			<Card style={menuIcon.wrapper}>
				<Image source={icon} />
				<Text style={menuIcon.label}>{text}</Text>
			</Card>
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.renderProfileBackground()}
				<View style={styles.wrapper}>
					<ScrollView>
						<View style={styles.rowWrapper}>
							{this.renderMenuItem(require('@images/heart_s.png'), 'Favorites')}
							{this.renderMenuItem(require('@images/gps_s.png'), 'My Map')}
							{this.renderMenuItem(require('@images/email_s.png'), 'Drafts')}
						</View>

						<View style={styles.rowWrapper}>
							{this.renderMenuItem(require('@images/photo_s.png'), 'Photos')}
							{this.renderMenuItem(require('@images/video_s.png'), 'Videos')}
							{this.renderMenuItem(require('@images/static_s.png'), 'Statics')}
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Profile);
