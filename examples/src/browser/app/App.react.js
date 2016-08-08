/* Libs */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'react-pure-render/component';
import mapStateToProps from '../../common/app/mapStateToProps';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import RouterHandler from '../../common/app/RouterHandler.react';

// navigation
import Navigation from '../navigation/navigation';


class App extends Component {

  render() {
    const {router} = this.context;

    return (
      <div>
        <Navigation />
        <div>
          <RouterHandler {...this.props} router={router} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
