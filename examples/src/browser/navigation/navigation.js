import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import className from 'classnames';

import './navigation.scss';

export default class Navigation extends Component {

  // static PropTypes = {
  //   header: PropTypes.bool
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      header
    } = this.props;

    const navClasses = className('main-navigation');

    return(
      <nav className={ navClasses }>
        <ul>
          {/* <li><Link to={`/`}>Home</Link></li> */}
        </ul>
      </nav>
    );
  }
}
