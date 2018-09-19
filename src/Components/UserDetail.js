import React, { Component } from 'react'

export default class UserDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loaded: false
    };
  }


  componentDidMount(){
    this.loadUser(this.props.match.params.userID);
  }


  loadUser(userID) {
    fetch("https://reqres.in/api/users/" + userID)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          user: result.data,
          loaded: true
        });
      },
      (error) => {
        alert(error);
      }
    )
  }

	render() {
    const {user, loaded} = this.state;
    if (!loaded){
      return (
        <div>Loading...</div>
      )
    } else {
        return (
          <div className="container">
            <div className="row">
              <div className="col-2">
                <h3>User Detail</h3>
                <div class="card">
                  <img class="card-img-top" src={user.avatar} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">{user.first_name + " " + user.last_name}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
	}
}
