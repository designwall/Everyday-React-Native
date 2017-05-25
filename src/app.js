import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from '@src/config/navigation/Navigator';
import configureStore from '@src/config/store';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			store: (module.hot && module.hot.data && module.hot.data.store)
				? module.hot.data.store
				: configureStore(() => { this.setState({ loading: false }); })
		};
	}

	render() {
		if (this.state.loading) {
			// loading screen here
			return null;
		}

		return (
			<Provider store={this.state.store}>
				<View style={{ flex: 1 }}>
					<StatusBar
						backgroundColor="transparent"
						barStyle="light-content"
						translucent />
					<View style={{ flex: 1 }}>
						<Navigator />
					</View>
				</View>
			</Provider>
		);
	}
}

export default App;
