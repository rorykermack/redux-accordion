/* Redux Accordion Reducer */
import React from 'react';
import * as actions from './actions';
import {List, Record, Map} from 'immutable';
import Immutable from 'immutable';

const NewAccordion = Record({
  singleOpen: false,
  openByDefault: false,
  activeSections: List()
});

const InitialState = Record({
  accordions: Map()
})

function checkUndef(item) {
  return (typeof item != 'undefined');
}

const initialState = new InitialState;

export default function reduxAccordion(state = initialState, action) {
  switch (action.type) {
    /* Set the active section */
    case actions.REDUX_ACCORDION_SET_SECTION: {
      let newActiveSections;
      const currentAccordion = state.accordions.get(action.payload.uniqId),
            currentActiveSections = currentAccordion.get('activeSections'),
            isPresent = currentActiveSections.lastIndexOf(action.payload.section);
      /* If section is already open */
      if (isPresent === -1) {
        newActiveSections = (currentAccordion.singleOpen) ? new List([action.payload.section]) : currentActiveSections.push(action.payload.section);
      } else {
        newActiveSections = (currentAccordion.singleOpen) ? new List([]) : currentActiveSections.delete(isPresent);
      }
      return state.update('accordions', accordions => accordions.set(action.payload.uniqId, currentAccordion.set('activeSections', newActiveSections)));
    }
    /* Pass in all required active sections */
    case actions.REDUX_ACCORDION_SET_SECTIONS: {
      const currentAccordion = state.accordions.get(action.payload.uniqId),
            currentActiveSections = currentAccordion.get('activeSections');
      return state.update('accordions', accordions => accordions.set(action.payload.uniqId, currentAccordion.set('activeSections', Immutable.fromJS(action.payload))));
    }
    /* Create a new accordion */
    case actions.REDUX_ACCORDION_CREATE: {
      const currentSize = state.accordions.size,
            singleOpen = (checkUndef(action.payload.singleOpen)) ? action.payload.singleOpen : false,
            allOpenByDefault = (checkUndef(action.payload.openByDefault)) ? action.payload.openByDefault : false,
            uniqId = (checkUndef(action.payload.uniqId)) ? action.payload.uniqId : false,
            activeSections = [];

      if(!uniqId) {
        console.log('ERROR: Whoops, looks like you forgot to set a uniqId. E.g. "home-page-accordion" ');
        return false;
      }

      React.Children.map(action.payload.kids, (child, i) => {
        const {openByDefault} = child.props;
        if (allOpenByDefault && !singleOpen) {
          activeSections.push(`acc-sec-${i}`);
        } else if (openByDefault && !singleOpen) {
          activeSections.push(`acc-sec-${i}`);
        } else if (singleOpen && activeSections.length === 0) {
          activeSections.push(`acc-sec-${i}`);
        }
      })


      const newAccordion = new NewAccordion({
        singleOpen: singleOpen,
        openByDefault: allOpenByDefault,
        activeSections: new List(activeSections)
      });

      return state.update('accordions', accordions => accordions.set(uniqId, newAccordion));
    }
  }
  return state;
}
