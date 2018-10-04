import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    characters : []
  }
  componentWillMount(){
          fetch('https://rickandmortyapi.com/api/character/')
          .then(res => res.json())
          .then( character => {
            this.setState({
              characters: character.results
            })
          })
        }
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
        <h1 class="display-3">Rick and Morty - All Characters Status Live</h1>
        </div>
      </div>
          <div className="row mt-4">
            
        {this.state.characters.map(
          character => <div className="col-md-3">
          <div className="card mt-4">
            <img className="card-img-top" src={character.image} alt="Card image cap"/>
            <div className="card-header">
              <h5 classname="card-title">{character.name}</h5>
              <span className="badge badge-pill badge-dark ml-2">{character.status}</span>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">{character.species}</h6>
              <p className="card-text">{character.gender}</p>
            </div>
          </div>
          </div>

          )}

          </div>
         </div>
      </div>
    );
  }
}

export default App;

//
// const
// arrow function
// lexical this
// rest 
// spread operator
// template
