import React from 'react';
import CharacterItems from "./CharacterItems.js";
import Spinner from './Spinner.js';

const CharacterGrid = ({isLoading, items}) => {
    if(isLoading) return(
        <Spinner />
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