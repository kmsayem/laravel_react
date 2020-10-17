import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  Redirect 
} from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { ConnectedRouter } from "react-router-redux";
import { connect } from 'react-redux';
import App from './App/Layouts/App';
import asyncComponent from './helpers/AsyncFunc';
// import Auth0 from './helpers/auth0';

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
          {/* <Route
            exact
            path={'/signin'}
            component={asyncComponent(() => import('./Page/signin'))}
          /> */}
          {/* <Route
            exact
            path={'/404'}
            component={asyncComponent(() => import('./App/Page/404'))}
          />
          <Route
            exact
            path={'/500'}
            component={asyncComponent(() => import('./App/Page/500'))}
          /> */}
          <Route
            exact
            path={'/signin'}
            component={asyncComponent(() => import('./App/Page/signin'))}
          />
          {/* <Route
            exact
            path={'/signup'}
            component={asyncComponent(() => import('./App/Page/signup'))}
          />
          <Route
            exact
            path={'/forgotpassword'}
            component={asyncComponent(() =>
              import('./App/Page/forgotPassword')
            )}
          />
          <Route
            exact
            path={'/resetpassword'}
            component={asyncComponent(() =>
              import('./App/Page/resetPassword')
            )}
          /> */}
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
