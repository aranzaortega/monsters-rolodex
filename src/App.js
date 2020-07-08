import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';

import './App.css';

import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      //Property
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    /* IS THE SAME THING THAT : 
    const monsters = this.state.monsters;
    const searchField = this.state.searchField; */
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters" 
          handleChange = {this.handleChange}
        />
        {/* Dynamically we're chargin de filter of monsters (re-render cardlist) */}
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
