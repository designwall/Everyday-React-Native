import { NavigationActions } from 'react-navigation';

const screenAction = {
	replace: (name, index = 0) => { 
		return NavigationActions.reset({
			index,
			actions: [
				NavigationActions.navigate({ routeName: name })
			]
		});
	},
	
	back: (key = null) => {
		return NavigationActions.back({
			key
		});
	}
};

export { screenAction };
