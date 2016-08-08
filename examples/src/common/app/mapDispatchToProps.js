/* Libs */
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

// Local Module
import * as reduxAccordionActions from '../redux-accordion/actions';
// Npm Module


const actions = [
  reduxAccordionActions
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
