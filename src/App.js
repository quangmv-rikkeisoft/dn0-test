import React, { Suspense } from 'react';
import routes from './config/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivatePage from './pages/PrivatePage';

function App () {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map((route) => (
              <Route key={`path${route.path}`} path={route.path} exact 
              component={route.isProtected?PrivatePage(()=><route.component title={route.title} />):()=><route.component title={route.title} />} />
            ))
          }
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App