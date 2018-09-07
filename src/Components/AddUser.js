import React, { Component } from 'react';

function Alert(props){
  switch (props.alertType) {
    case "success":
      return (
                <div className={"alert alert-success " + props.className} role="alert">
                  User Added!
                </div>
              );
      break;
  
    case "error":
    return (
              <div className={"alert alert-danger " + props.className} role="alert">
                Something went wrong!
              </div>
            );
      break;
  }
}

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userAdded: false,
      errorAddingUser: false,
      alertClass: 'alert-hidden'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const user = {};
    user.name = this.state.firstName + " " + this.state.lastName;
    user.job = "Web Developer";
    this.addUser(user);
  }

  addUser(user){
    const data = {name:"Lucas KLG",salary:"80000",age:"23"};
    fetch("	http://dummy.restapiexample.com/api/v1/create", {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((response) => {
        this.setState({userAdded: true, errorAddingUser: false, alertClass: 'alert-shown'});
        setTimeout(() => {
          this.setState({userAdded: false, errorAddingUser: false, alertClass: 'alert-hidden'});
        }, 3000);
      })
      .catch((error) => {
        this.setState({userAdded: true, errorAddingUser: true});
        setTimeout(() => {
          this.setState({userAdded: false, errorAddingUser: false});
        }, 3000);
      })
        
  }

  render() {
    const userAdded = this.state.userAdded;
    const errorAddingUser = this.state.errorAddingUser;
    let alert;

    // if(userAdded){
    //   if(errorAddingUser) {
    //     <Alert alertType={"error"} className={"alert-shown"} />;
    //   } else {
    //     alert = <Alert alertType={"success"} />;
    //   }
    // }

    alert = <Alert alertType={"success"} className={this.state.alertClass} />;

    return (
      <div className="container">
      {alert}
        <div className="row">
          <div className="col-8">
            <h3>Add user</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  First Name:
                  <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Last Name:
                  <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} className="form-control" />
                </label>
              </div>
              <input type="submit" value="Submit" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
