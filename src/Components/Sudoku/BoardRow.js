import React, { Component } from 'react';
import Field from './Field';


// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

export default class BoardRow extends Component {
 
  render() {
    let fields = this.props.fields;
    let row = this.props.row;
    let start = 0;
    let end = 0;
    start = (row === 1 ? 0 : (row * 8  ) - 1 );
    end = start + 8;
    let newFields = [];
    fields.forEach((element, index) => {
      if (index >= start && index <= end) {
        newFields[index] = element;
      }
    });
    
    return (
      // <div className="board-row">
      //   {newFields.map((field, index) => {
      //     if(field !== null){
      //       return <span className="default-value" key={index}>{field}</span>
      //     } else {
      //         return <Field key={index} correctValue={this.props.boardResults[index]} />
      //     }
      //   })}
      // </div>
      <tr>
      {newFields.map((field, index) => {
        if(field !== null){
          return <td><div className="sudoku-input default-value" key={index}>{field}</div></td>
        } else {
            return <td><Field key={index} correctValue={this.props.boardResults[index]} /></td>
        }
      })}
    </tr>
    )
  }
}
