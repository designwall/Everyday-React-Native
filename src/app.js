import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import configureStore from '../src/store';

//import SplashScreen from '@src/screen/SplashScreen';
//import Login from '@src/screen/Login';
import Main from '../src/screen/main/Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoading: true,
			loading: true,
			store: (module.hot && module.hot.data && module.hot.data.store)
				? module.hot.data.store
				: configureStore(() => { this.setState({ loading: false }); })
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'ubuntu-light': require('../assets/fonts/Ubuntu-L.ttf'),
			'ubuntu-bold': require('../assets/fonts/Ubuntu-B.ttf'),
			'ubuntu-medium': require('../assets/fonts/Ubuntu-M.ttf'),
			'ubuntu-regular': require('../assets/fonts/Ubuntu-R.ttf')
		});

		this.setState({ fontLoading: false });
	}

	render() {
		if (this.state.loading || this.state.fontLoading) {
			// loading screen here
			return null;
		}

		return (
				<Provider store={this.state.store}>
					<Main />
				</Provider>
		);
	}
}

export default App;
