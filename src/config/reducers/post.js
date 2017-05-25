const post = (state = {}, action) => {
	return {
		id: 'P0001',
		userId: 'U0001',
		time: 1483245000000,
		title: 'What a way to start the year :)',
		content: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale\'s back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer, to descend upon the monster\'s back for the special purpose referred to. But in very many cases, circumstances require that the harpooneer shall remain on the whale till the whole tensing or stripping operation is concluded. The whale, be it observed, lies almost entirely submerged, excepting the immediate parts operated upon. So down there, some ten feet below the level of the deck, the poor harpooneer flounders about, half on the whale and half in the water, as the vast mass revolves like a tread-mill beneath him. On the occasion in question, Queequeg figured in the Highland costume—a shirt and socks—in which to my eyes, at least, he appeared to uncommon advantage; and no one had a better chance to observe him, as will presently be seen.',
		comments: [
			{
				id: 'CM0001',
				userId: 'U0002',
				content: 'Haha. That’s nice! Looking great!',
				likes: ['U0001', 'U0002'],
				time: 1483245000000
			},
			{
				id: 'CM0002',
				userId: 'U0002',
				content: 'Haha. That’s nice! Looking greatttttt!',
				likes: ['U0001', 'U0002'],
				time: 1483245000000
			}
		]
	};
};

export default post;
