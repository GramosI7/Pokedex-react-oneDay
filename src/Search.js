import React from "react";

class Search extends React.Component{

    // buttonClick = (event) => {
    //     event.preventDefault();
    // }

    render(onChangeInput, getPokemonFromApi){
        return (
            <div>
                <form action="">
                    <input onChange={this.props.onChangeInput} type="text"/>
                    <button onClick={this.props.getPokemonFromApi} type="submit">Chercher</button>
                </form>
            </div>
        )
    }
}
   

export default Search;