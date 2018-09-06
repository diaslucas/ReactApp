import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
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
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container">
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
