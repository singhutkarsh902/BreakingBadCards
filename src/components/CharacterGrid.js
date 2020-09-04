import React from 'react';
import CharacterItems from "./CharacterItems.js";

const CharacterGrid = ({isLoading, items}) => {
    if(isLoading) return(
        <h1>Loading...</h1>
    )
    else return(
        <section className='cards'>
            {items.map((item) => (
                <CharacterItems key={item.char_id} item={item}></CharacterItems>
            ))}
        </section>
    )
}

export default CharacterGrid;