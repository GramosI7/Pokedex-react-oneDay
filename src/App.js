import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import Search from "./Search";
import Info from "./Info";
import Pokemon from "./Pokemon";


//http://pokeapi.co/api/v2/pokemon/1



class App extends Component {

 constructor(props){
   super(props);
    this.state = {
      input: "",
      pokemon: {}
    }
 }



  onChangeInput = (event) => {
    event.target.value;
    // console.log(event.target.value);
    this.setState({ input : event.target.value });
    console.log(this.state.input)
}




 getPokemonFromApi = (event) => {
  event.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = new Pokemon(data);
        this.setState({pokemon});
        console.log(this.state.pokemon)

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {
    return (
      <div className="App">
      <h1>Pokedex</h1>
        <Info pokemon={this.state.pokemon}/>
        <Search getPokemonFromApi={this.getPokemonFromApi} onChangeInput={this.onChangeInput} />
      </div>
    );
  }
}

export default App;
