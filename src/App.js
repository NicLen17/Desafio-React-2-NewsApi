import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from './components/Card';
import NavReactB from './components/NavReacB';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import News from './Pages/News'
import Login from './Pages/Login'

export default function App() {
      const [user, setUser] = useState('');

      return (
            <Router>
                  <NavReactB />
                  <Switch>
                        <Route path="/login">
                              <Login setUser={setUser} />
                        </Route>
                        <Route path="/news">
                              <News currentUser={user} />
                        </Route>
                        <Route path="/" exact>Home</Route>
                  </Switch>
            </Router>
      );
}
