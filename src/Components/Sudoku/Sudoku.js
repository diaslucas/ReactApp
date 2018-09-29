import React, { Component } from 'react'
import BoardRow from './BoardRow';

export default class Sudoku extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boardRows: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      fields: Array(81).fill(null),
      boardResults: [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        9, 8, 7, 6, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        9, 8, 7, 6, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        9, 8, 7, 6, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        9, 8, 7, 6, 5, 4, 3, 2, 1,
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    };
  }

  componentDidMount() {
    let fields = this.state.fields;
    fields[0] = 1;
    fields[8] = 2;
    this.setState({
      fields: fields
    });
  }

  render() {
    const { boardRows, fields, boardResults } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Sudoku</h3>
            <table className="sudoku-board">
              {boardRows.map(boardRow => (
                <BoardRow key={boardRow} row={boardRow} fields={fields} boardResults={boardResults} />
              ))}
            </table>
          </div>
        </div>
      </div>
    )
  }
}
