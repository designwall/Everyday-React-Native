import React, { Component } from 'react';
import { View, Image, StatusBar, ScrollView, Animated } from 'react-native';

import { Header, Text } from '@src/components';
import { fonts, colors, size } from '@src/styles';
import { screenAction } from '@src/functions';

class Post extends Component {

	constructor(props) {
		super(props);

		this.state = {
			titleBarColor: 'transparent'
		};
	}

	render() {
		return (
			<ScrollView 
				style={{ flex: 1 }} 
				bounces={false} 
				stickyHeaderIndices={[1]} 
				scrollEventThrottle={16}
				onScroll={(e) => {
					const currentY = e.nativeEvent.contentOffset.y;
					const currentColor = this.state.titleBarColor;
					if (currentY > 65 && currentColor !== '#FD917C') {
						this.setState({ titleBarColor: '#FD917C' });
					} else if (currentY <= 65 && currentColor !== 'transparent') {
						this.setState({ titleBarColor: 'transparent' });
					}
					//console.log(e.nativeEvent.contentOffset.y);
				}}>
				<Image 
					source={require('@images/test_bg.png')}
					style={{ width: size.screenWidth, height: size.screenHeight / 3, justifyContent: 'center', alignItems: 'center' }}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={require('@images/time_bg.png')}
							style={{ width: 70, height: 28, justifyContent: 'center', alignItems: 'center' }}>
							<Text style={{ backgroundColor: 'transparent', fontFamily: fonts.bold, color: 'white' }}>1 JAN</Text>
						</Image>
						<Text style={{ backgroundColor: 'transparent', fontFamily: fonts.bold, color: 'white', fontSize: 24, marginTop: 12, marginHorizontal: 56, textAlign: 'center' }}>
							What a way to start the year :)
						</Text>
					</View>
				</Image>

				<View
					style={{ position: 'absolute', top: StatusBar.currentHeight, paddingTop: 18, left: 0, right: 0, backgroundColor: this.state.titleBarColor }}>
					<Header 
						iconLeft={require('@images/arrow_back.png')} 
						onPressLeft={() => { this.props.navigation.dispatch(screenAction.back()); }} />
				</View>

				<View style={{ flex: 2, backgroundColor: 'white', paddingHorizontal: 12 }}>
					
						<Text style={{ marginBottom: 36, marginTop: 12, color: colors.gray, fontSize: 12, textAlign: 'center' }}>Posted at 11:30 AM | Tuesday, 1 Jan, 2017.</Text>
						<Text style={{ marginBottom: 12, color: colors.gray, fontSize: 14, textAlign: 'justify', lineHeight: 22 }}>
							In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer, to descend upon the monster's back for the special purpose referred to. But in very many cases, circumstances require that the harpooneer shall remain on the whale till the whole tensing or stripping operation is concluded. The whale, be it observed, lies almost entirely submerged, excepting the immediate parts operated upon. So down there, some ten feet below the level of the deck, the poor harpooneer flounders about, half on the whale and half in the water, as the vast mass revolves like a tread-mill beneath him. On the occasion in question, Queequeg figured in the Highland costume—a shirt and socks—in which to my eyes, at least, he appeared to uncommon advantage; and no one had a better chance to observe him, as will presently be seen.
						</Text>
					
				</View>
			</ScrollView>
		);
	}
}

export default Post;
