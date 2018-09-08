import React, { Component } from 'react';

function Alert(props) {
  return (
    <div className={"alert " + props.className} role="alert">
      User Added!
          </div>
  );
}

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      salary: '',
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

  handleSubmit(event) {
    event.preventDefault();
    const user = {};
    user.name = this.state.name;
    user.age = this.state.age;
    user.salary = this.state.salary;
    this.addUser(user);
  }

  addUser(user) {
    fetch("	http://dummy.restapiexample.com/api/v1/create", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((response) => {
        this.setState({ alertClass: 'alert-success alert-shown' });
        setTimeout(() => {
          this.setState({ alertClass: 'alert-hidden' });
        }, 1500);
        this.clearFields();
      })
      .catch((error) => {
        this.setState({ alertClass: 'alert-danger alert-shown' });
        setTimeout(() => {
          this.setState({ alertClass: 'alert-hidden' });
        }, 1500);
        this.clearFields();
      })
  }

  clearFields() {
    this.setState({
      name: '',
      age: '',
      salary: ''
    });
  }

  render() {
    return (
      <div className="container">
        <Alert className={this.state.alertClass} />
        <div className="row">
          <div className="col-8">
            <h3>Add user</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  Name:
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Age:
                  <input type="number" name="age" value={this.state.age} onChange={this.handleChange} className="form-control" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Salary:
                  <input type="text" name="salary" value={this.state.salary} onChange={this.handleChange} className="form-control" />
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