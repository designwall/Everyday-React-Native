const user = (state = {}, action) => {
	return {
			avatar: '@images/avatar_default.jpg',
			id: 'U0001',
			name: 'Christian Torres',
			email: 'someemail@gmail.com',
			quote: 'There is only one happiness in this life, to love and be loved.',
			posts: 143,
			followers: 525,
			following: 348
			// Blah blah blah
		};
};

export default user;
