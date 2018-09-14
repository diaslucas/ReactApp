import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';
import TestForm from './Components/TestForm';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menus: [
        { menuName: 'Users List', menuLink: '/', active: true },
        { menuName: 'Add User', menuLink: '/AddUser', active: false },
        { menuName: 'Test', menuLink: '/Test', active: false }
      ]
    }
  }

  Menu(props) {
    let activeClass = (props.active ? 'menu-active' : '');
    return (
      <li className={"nav-item " + activeClass}>
        <Link to={props.link} className="nav-link" onClick={props.onClick}>{props.text}</Link>
      </li>
    )
  }

  SetMenuActive(index) {
    let menus = this.state.menus;
    menus.forEach((menu, i) => {
      menu.active = (i === index);
    });
    this.setState({
      menus: menus
    });
  }

  render() {
    const { menus } = this.state;
    return (
      <Router>
        <div>
          <ul className="nav nav-pills">
            {menus.map((menu, index) => {
              return (
                <this.Menu
                  key={index}
                  link={menu.menuLink}
                  text={menu.menuName}
                  active={menu.active}
                  onClick={() => this.SetMenuActive(index)}
                />);
            })}
          </ul>

          <Route exact path='/' component={UsersList} />
          <Route path='/AddUser' component={AddUser} />
          <Route path='/Test' component={TestForm} />
        </div>
      </Router>
    );
  }
}

export default App;
