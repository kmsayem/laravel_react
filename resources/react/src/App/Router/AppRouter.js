import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { LayoutContentWrapper } from "@/App/components/utility/";
import asyncComponent from '@/helpers/AsyncFunc';
import { APP_PATH } from "./paths";

const routes = 
  {
    admin: [
      {
        path: APP_PATH.dashboard,
        component: asyncComponent(() => import('../Admin/Dashboard')),
      },
      {
        path: APP_PATH.blank,
        component: asyncComponent(() => import('../Admin/Blank')),
      }
    ],
    // user: [
    //   {
    //     path: APP_PATH.dashboard,
    //     component: asyncComponent(() => import('../User/Dashboard')),
    //   }
    // ]
  };

class AppRouter extends Component {
  render() {
    const { style, location} = this.props;
    if (location.pathname === "/") {
      return <Redirect to={{ pathname: APP_PATH.dashboard }} />;
    }
    let userType = "admin";
    return (
      <div style={style}>
        <LayoutContentWrapper>
          {routes[userType].map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;
            console.log(singleRoute,'singleRoute')
            return (
              <Route
                key={singleRoute.path}
                path={`${singleRoute.path}`}
                // exact
                {...otherProps}
              />
            );
          })}
        </LayoutContentWrapper>
      </div>
    );
  }
}

export default AppRouter;
