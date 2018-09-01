import React, { Component } from 'react';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: [],
          error: null,
          isLoaded: false,
          currentPage: 1,
          totalPages: 1,
        };
      }
    
      componentDidMount() {
        fetch("https://reqres.in/api/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.data,
                currentPage: result.page,
                totalPages: result.total_pages
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

  render() {
    const { users, error, isLoaded, currentPage, totalPages } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h3>List of users </h3>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td><img src={user.avatar} className="rounded-circle" width="50" height="50" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <nav>
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Previous</a>
                                </li>
                                {this.createPagination(totalPages, currentPage)}
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </div>
        );
    }
  }

//   createPagination(totalPages, currentPage) {
//       return (
//         <li className="page-item"><a className="page-link" href="#"> 1</a></li>
//       )
//       let pages = {};
//       let current = <span className="sr-only">(current)</span>;
//     for (let i = 1; i <= totalPages; i++) {
//         pages += <li className="page-item"><a className="page-link" href="#"> {i + (currentPage == i ? current : '')}</a></li>;
//     }
//     return (pages)
//   }

}

export default UsersList;
