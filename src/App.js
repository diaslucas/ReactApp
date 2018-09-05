import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to='/' className="nav-link">Users List</Link>
            </li>
            <li className="nav-item">
              <Link to='/AddUser' className="nav-link">Add User</Link>
            </li>
          </ul>

          <Route exact path='/' component={UsersList} />
          <Route path='/AddUser' component={AddUser} />
        </div>
      </Router>
    );
  }
}

export default App;
