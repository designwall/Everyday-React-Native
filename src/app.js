import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store';

//import SplashScreen from '@src/screen/SplashScreen';
//import Login from '@src/screen/Login';
import Main from '../src/screen/main/Main';

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
        <Main />
      </Provider>
    );
  }
}

export default App;
