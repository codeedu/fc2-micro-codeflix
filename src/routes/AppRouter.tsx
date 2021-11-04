import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './index';

const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      {routes.map((route, key) => {
        return (
          <Route
            key={key}
            path={route.path}
            component={route.component}
            exact={route.exact === true}
          />
        );
      })}
    </Switch>
  );
};

export default AppRouter;
