import React from 'react';
import image from '../img/spinner.gif'

const Spinner = () => {
    return(
        <img src={image} style={{width : "200px", margin : "auto", display : "block"}} alt="Loading..." />
    )
}

export default Spinner;