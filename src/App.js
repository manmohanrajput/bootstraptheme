import React,{useState} from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect,useHistory } from "react-router-dom";

import Main from './component/Mains/Main';
import Login from './component/Login';
import FormPage from './component/FormPage';



function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Main user={user} onLogout={handleLogout}/>
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path='/form' component={FormPage}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
