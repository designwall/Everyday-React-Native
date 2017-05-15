import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';
import Svg, {
    Circle,
    Polygon
} from 'react-native-svg';
import { size, colors, fonts } from '@src/styles';
import Text from '@src/components/Text';
import Card from '@src/components/Card';

const padding10 = size.toSize(10);
const cWrapper = {
	x: size.byWidth(2),
	y: (size.byHeight(7) + size.byHeight(4)) / 2 - padding10, // 1/7 + 10px + (1/4 - 1/7) / 2
	r: size.byWidth(6)
};
const cImage = {
	x: cWrapper.x,
	y: cWrapper.y, 
	r: cWrapper.r - padding10
};


class Profile extends Component {

	renderProfileBackground() {
		return (
			<View style={{ flex: 2, borderBottomWidth: 1, borderBottomColor: colors.gray }}>
				<View>
					<Svg
						height={size.byHeight(4)}
						width={size.byWidth(1)}>
						<Polygon
							points={
								`0,${size.byHeight(4) - padding10} ` +							//Top Left
								`${size.byWidth(1)},${size.byHeight(7) - padding10} ` +			//Top Right
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

				<View style={{ flex: 1, backgroundColor: 'white', marginTop: -2 }}>
					<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ fontFamily: fonts.medium, color: colors.darkGray, fontSize: size.toSize(24) }}>Rejo Varghese</Text>
						<Text style={{ fontFamily: fonts.italic, color: colors.gray, fontSize: size.toSize(14), paddingHorizontal: size.toSize(60), marginVertical: 10, textAlign: 'center' }}>There is only one happiness in this life, to love and be loved.</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Text style={{ fontFamily: fonts.bold, color: colors.darkGray, fontSize: size.toSize(22) }}>143</Text>
							<Text style={{ color: colors.gray, fontSize: size.toSize(11) }}>POSTS</Text>
						</View>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Text style={{ fontFamily: fonts.bold, color: colors.darkGray, fontSize: size.toSize(22) }}>525</Text>
							<Text style={{ color: colors.gray, fontSize: size.toSize(11) }}>FOLLOWERS</Text>
						</View>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Text style={{ fontFamily: fonts.bold, color: colors.darkGray, fontSize: size.toSize(22) }}>348</Text>
							<Text style={{ color: colors.gray, fontSize: size.toSize(11) }}>FOLLOWING</Text>
						</View>
					</View>
				</View>
				<View style={{ position: 'absolute', top: cImage.y - cImage.r, left: cImage.x - cImage.r }}>
					<Image 
						source={require('../../../assets/images/avatar_default.jpg')} 
						style={{ width: cImage.r * 2, height: cImage.r * 2, borderRadius: cImage.r }} />
				</View>
			</View>
		);
	}

	renderMenuItem(icon, text) {
		return (
			<Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>
				<Image source={icon} />
				<Text style={{ fontSize: 14, color: colors.darkGray, marginTop: 10 }}>{text}</Text>
			</Card>
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.renderProfileBackground()}
				<View style={{ flex: 1, backgroundColor: colors.lightGray }}>
					<ScrollView>
						<View style={{ flexDirection: 'row' }}>
							{this.renderMenuItem(require('@images/heart_s.png'), 'Favorites')}
							{this.renderMenuItem(require('@images/gps_s.png'), 'My Map')}
							{this.renderMenuItem(require('@images/email_s.png'), 'Drafts')}
						</View>

						<View style={{ flexDirection: 'row' }}>
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

export default Profile;
