import React, { Component } from "react";
import "./Pokecard.css";

const picSrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);


class Pokecard extends Component {
  render() {
    let img = `${picSrc}${padToThree(this.props.id)}.png`
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img className="Pokecard-img" src={img} alt={this.props.name}/>
        <div className="Pokecard-data">type: {this.props.type}</div>
        <div className="Pokecard-data">exp: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;