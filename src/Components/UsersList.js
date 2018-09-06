import React, { Component } from 'react';

const paginationRange = (from, to, current, step = 1) => {
    let i = from;
    const paginationRange = [];
    let page = {};
    while (i <= to) {
        page = {Number: i, Current: (i === current)};
        paginationRange.push(page);
      i += step;
    }
    return paginationRange;
};

function CurrentPage(props) {
    if (props.CurrentPage){
        return (
            <span className="sr-only">(current)</span>
        )
    } else {
        return null
    }
}

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

      loadPage(page){
        fetch("https://reqres.in/api/users?page=" + page)
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
    
      componentDidMount() {
        this.loadPage(this.state.currentPage);
      }

  render() {
    const { users, error, isLoaded, currentPage, totalPages } = this.state;
    const range = paginationRange(1, totalPages, currentPage);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="text-center">Loading...</div>;
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
                                        <td><img src={user.avatar} alt={user.first_name} className="rounded-circle" width="50" height="50" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav>
                            <ul className="pagination">
                                <li className={(currentPage === 1 ? "page-item disabled" : "page-item")}>
                                    <a className="page-link" onClick={() => this.loadPage(currentPage -1)}>Previous</a>
                                </li>
                                {range.map(page => (
                                    <li key={page.Number} className={(page.Current ? "page-item active" : "page-item")}>
                                        <a className="page-link" onClick={() => this.loadPage(page.Number)}> {page.Number}
                                            <CurrentPage CurrentPage={page.Current} /></a></li>
                                ))}
                                <li className={(currentPage === totalPages ? "page-item disabled" : "page-item")}>
                                    <a className="page-link" onClick={() => this.loadPage(currentPage +1)}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
  }

}

export default UsersList;
