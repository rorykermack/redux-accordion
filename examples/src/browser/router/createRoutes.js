import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Routes */
import App from '../app/App.react';

/* 404 Page */
import NotFound from '../notFound/Page.react';

/* React accordion Test */
// import ReduxAccordion from '../components/redux-accordion/test/Page.react';
import ReduxAccordion from '../components/redux-accordion-component/Page.react';

export default function createRoutes(getState) {

  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) replace(`/?next=${nextState.location.pathname}`);
  };

  return (
		<Route path="/" component={App}>
			<IndexRoute component={ReduxAccordion} />
      <Route path="*" component={NotFound}/>
		</Route>
	)
}
