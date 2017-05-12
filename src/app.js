import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import Router from '@src/Router';
import SplashScreen from './screens/SplashScreen';

import configureStore from '@src/store';

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
			'ubuntu-light': require('@fonts/Ubuntu-L.ttf'),
			'ubuntu-bold': require('@fonts/Ubuntu-B.ttf'),
			'ubuntu-medium': require('@fonts/Ubuntu-M.ttf'),
			'ubuntu-regular': require('@fonts/Ubuntu-R.ttf'),
			'ubuntu-italic': require('@fonts/Ubuntu-RI.ttf')
		});

		this.setState({ fontLoading: false });
	}

	render() {
		if (this.state.fontLoading) {
			return null;
		}

		if (this.state.loading) {
			// loading screen here
			return <SplashScreen />;
		}

		return (
			<Provider store={this.state.store}>
				<NavigationProvider router={Router}>
					<StackNavigation initialRoute="SplashScreen" />
				</NavigationProvider>
			</Provider>
		);
	}
}

export default App;
