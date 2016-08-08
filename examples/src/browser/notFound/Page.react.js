import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';

import './about.scss';


export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="about-page">
        <h1>404 - NOT FOUND!!</h1>      
      </section>
    );
  }
}
