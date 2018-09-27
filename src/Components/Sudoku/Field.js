import React, { Component } from 'react'

export default class Field extends Component {

    constructor(props) {
        super(props)

        this.state = {
          value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }

    render() {
        return (
            <input type="text" value={this.state.value} className="sudoku-input" maxLength="1" onChange={this.handleChange} />
        )
    }
}
