import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';
import TestForm from './Components/TestForm';
import UserDetail from './Components/UserDetail';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menus: [
        { menuName: 'Users List', menuLink: '/' },
        { menuName: 'Add User', menuLink: '/AddUser' },
        { menuName: 'Test', menuLink: '/Test' }
      ]
    }
  }

  Menus(props) {
    return (
      <li className="nav-item">
        <NavLink to={props.link} exact activeClassName="menu-active" className="nav-link">{props.text}</NavLink>
      </li>
    )
  }

  render() {
    const { menus } = this.state;
    return (
      <Router>
        <div>
          <ul className="nav">
            {menus.map((menu, index) => {
              return (
                <this.Menus  
                  key={index}
                  link={menu.menuLink}
                  text={menu.menuName}
                />);
            })}
          </ul>

          <Route exact path='/' component={UsersList} />
          <Route path='/AddUser' component={AddUser} />
          <Route path='/Test' component={TestForm} />
          <Route path='/UserDetail/:userID' component={UserDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
