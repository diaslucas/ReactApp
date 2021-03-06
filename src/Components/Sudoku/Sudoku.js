import React, { Component } from 'react'
import BoardRow from './BoardRow';

export default class Sudoku extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boardRows: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      fields: [
        0, 0, 0, 0, 7, 9, 0, 0, 0,
        0, 0, 8, 0, 0, 4, 7, 0, 0,
        1, 0, 0, 8, 5, 0, 9, 4, 3,
        0, 4, 5, 0, 9, 1, 0, 7, 0,
        0, 2, 0, 4, 0, 7, 0, 1, 0,
        0, 1, 0, 5, 8, 0, 2, 6, 0,
        9, 3, 1, 0, 4, 8, 0, 0, 2,
        0, 0, 4, 1, 0, 0, 8, 0, 0,
        0, 0, 0, 9, 2, 0, 0, 0, 0
      ],
      boardResults: [
        4, 5, 2, 3, 7, 9, 1, 8, 6,
        3, 9, 8, 6, 1, 4, 7, 2, 5,
        1, 7, 6, 8, 5, 2, 9, 4, 3,
        6, 4, 5, 2, 9, 1, 3, 7, 8,
        8, 2, 3, 4, 6, 7, 5, 1, 9,
        7, 1, 9, 5, 8, 3, 2, 6, 4,
        9, 3, 1, 7, 4, 8, 6, 5, 2,
        2, 6, 4, 1, 3, 5, 8, 9, 7,
        5, 8, 7, 9, 2, 6, 4, 3, 1 
      ]
    };
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
