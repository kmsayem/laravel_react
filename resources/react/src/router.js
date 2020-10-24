import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect 
} from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import { connect } from 'react-redux';
import App from './App/Layouts/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route
            exact
            path={'/signin'}
            component={asyncComponent(() => import('./App/Page/signin'))}
          />
          <RestrictedRoute
            exact
            component={App}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
};

export default connect(state => ({
  isLoggedIn: state.Auth.idToken !== null,
}))(PublicRoutes);
