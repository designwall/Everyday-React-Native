import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Router from './Router';

class Navigator extends Component {
	render() {
		return (
			<Router 
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
				})} />
		);
	}
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Navigator);
