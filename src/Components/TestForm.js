import React, { Component } from 'react'
import CategoriesDropdown from './CategoriesDropdown';

export default class TestForm extends Component {


  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3>Test</h3>
            <form>
              <CategoriesDropdown />
            </form>
          </div>
        </div>
      </div>
    )
  }

}
