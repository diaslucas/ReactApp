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
    let start, end = 0;
    start = (row === 1 ? 0 : (row * 9) - 1 );
    end = start + 9;
    let newFields = [];
    fields.forEach((element, index) => {
      if (index >= start && index <= end) {
        newFields[index] = element;
      }
    });
    
    return (
      <div className="board-row">
        {newFields.map((field, index) => {
          if(field !== null){
            return <span className="default-value" key={index}>{field}</span>
          } else {
              return <Field key={index} value={field}/>
          }
        })}
      </div>
    )
  }
}
