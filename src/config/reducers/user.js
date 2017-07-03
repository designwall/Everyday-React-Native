const user = (state = {}, action) => {
	return {
			avatar: '@images/avatar_default.jpg',
			id: 'U0001',
			name: 'Christian Torres',
			email: 'someemail@gmail.com',
			quote: 'There is only one happiness in this life, to love and be loved.',
			posts: 143,
			followers: 525,
			following: 348,
			notifications: [
				{
					id: 'NT0001',
					userId: 'U0002',
					content: 'liked your post “It was a long day”',
					time: 1483245000000
				},
				{
					id: 'NT0002',
					userId: 'U0002',
					content: 'commented on your post: “Haha. That’s nice! Looking great!”',
					time: 1483245000000
				},
				{
					id: 'NT0003',
					userId: 'U0002',
					content: 'started following you.',
					time: 1483245000000
				},
				{
					id: 'NT0004',
					userId: 'U0002',
					content: 'commented on your post:  “Yeah! Me too! I love beaches and things in Bali. I would love to go back again.”',
					time: 1483245000000
				}
			] 
			// Blah blah blah
		};
};

export default user;
