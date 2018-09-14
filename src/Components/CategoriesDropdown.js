import React, { Component } from 'react'

export default class CategoriesDropdown extends Component {

  constructor(props) {
    super(props)

    this.state = {

      selectedCategorie: "1",
      selectedTitle: "1",

      Categories: [
        {
          categorieID: "1",
          categorieName: "Books",
          Titles: [
            { TitleID: "1", TitleName: "Harry Potter", Author: "J.K. Rowling" },
            { TitleID: "2", TitleName: "A brief history of time", Author: "Stephen Hawking" },
            { TitleID: "3", TitleName: "1984", Author: "George Orwell" }
          ]
        },
        {
          categorieID: "2",
          categorieName: "Movies",
          Titles: [
            { TitleID: "1", TitleName: "Matrix", Author: "Wackowisky Brothers" },
            { TitleID: "2", TitleName: "Fight Club", Author: "David Fincher" },
            { TitleID: "3", TitleName: "The Departed", Author: "Martin Scorsese" }
          ]
        },
        {
          categorieID: "3",
          categorieName: "Series",
          Titles: [
            { TitleID: "1", TitleName: "Seinfeld", Author: "Jerry Seinfeld" },
            { TitleID: "2", TitleName: "Breaking Bad", Author: "Vince Gilligan" },
            { TitleID: "3", TitleName: "Silicon Valley", Author: " Mike Judge" }
          ]
        },
      ]
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {selectedCategorie, selectedTitle, Categories} = this.state;
    let categorieItems = Categories.map(categorie => (
      <option key={categorie.categorieID} value={categorie.categorieID}>{categorie.categorieName}</option>
    ));
    const Titles = Categories.filter(categorie => categorie.categorieID === selectedCategorie);
    let titleItems = Titles[0].Titles.map(title => (
      <option key={title.TitleID} value={title.TitleID}>{title.TitleName}</option>
    ));
    return (
      <div>
        <div className="form-group">
          <label>
            Categorie:
            <select className="form-control" name="selectedCategorie" value={selectedCategorie} onChange={this.handleChange.bind(this)}>
              {categorieItems}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Title:
           <select className="form-control" name="selectedTitle" value={selectedTitle} onChange={this.handleChange.bind(this)}>
              {titleItems}
            </select>
          </label>
        </div>
      </div>
    )
  }


}
