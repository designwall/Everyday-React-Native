import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import configureStore from '@src/store';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loading: true,
      store: (module.hot && module.hot.data && module.hot.data.store)
                ? module.hot.data.store
                : configureStore(() => {this.setState({ loading: false })})
    };
  }

  render() {
    if (this.state.loading) {
      // loading screen here
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <View><Text h1>EveryDay App</Text></View>
      </Provider>
    );
  }
}

export default App;
