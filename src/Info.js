import React from "react";

const Info = ({pokemon}) => {
    const { id, name, sprite, type, height, weight } = pokemon;

    console.log("Info", pokemon.types);


    return (
        <section>
        <img src={sprite} className='sprite-image' alt="sprite"/>
            <h3>nom: {name}</h3>
            <h5>Id: {id}</h5>
            <p>type: {type}</p>
            <p>poids: {weight} KG</p>
            <p>taille: {height}m</p>
        </section>
    )
}

export default Info;