import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
// import { ReactQueryDevtools } from 'react-query-devtools';

// Componentes
import Navbar from './components/layout/Navbar';
import Footnote from './components/layout/Footnote';
import Home from './components/pages/Home';

import Login from './components/auth/Login';

// import Register from './components/auth/Register';
import ComponentTester from './components/pages/ComponentTester';
import Locales from './components/pages/Locales';

// Estados

import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/routing/PrivateRoute';
import ReservarPage from './components/pages/ReservarPage';
import ReservaEdit from './components/pages/reservas/ReservaEdit';

const App = () => {
  Modal.setAppElement('#root');
  return (
    <>
      <AuthState>
        <div className="flex flex-col h-screen md:justify-between   min-h-screen">
          <Router>
            <Navbar />

            <div className="mt-3">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/reservaform" component={ReservaForm} /> */}
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path={['/reserva/:id', '/reserva' ]}
                  component={ReservarPage}
                />
                <Route exact path="/locales" component={Locales} />

                <PrivateRoute
                  exact
                  path="/reservas/:id_local/:id_reserva/edit"
                  component={ReservaEdit}
                />
                {/* <PrivateRoute exact path="/register" component={Register} /> */}
                <PrivateRoute exact path="/admin" component={ComponentTester} />
          
              </Switch>
            </div>
            <div className="mt-3">
              <Footnote />
            </div>
          </Router>
        </div>
      </AuthState>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default App;
