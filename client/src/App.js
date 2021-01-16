import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import CreateUser from "./CreateUser";

function App() {

  return (
    <div>
      <Router>
        <Link to="/"><button>All Users</button></Link>
        <Link to="/create"><button>Create User</button></Link>
        <Switch>
          <Route path="/create" component={CreateUser}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App
