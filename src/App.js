import React from 'react';
import { Component } from 'react';
import './App.css';
import {CardList} from './components/card/component.card-list';
import {SeachBox} from './components/search-box/component.search-box';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users_list=>this.setState({monsters:users_list}))
  }
  render() {

    const { monsters,searchField } = this.state;
    const FilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <header>
          <h1>Monsters Club</h1>
          <SeachBox
          placeholder="Search Monsters here"
          onchangeHandler={e=>this.setState({searchField:e.target.value})}
          />
          <CardList monsters_list={FilteredMonsters}></CardList>
        
        </header>
    </div>
    );
  }
}

export default App;
