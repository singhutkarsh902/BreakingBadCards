import React from 'react';
import Logo from '../img/logo.png';

const header = () => {
    return(
        <div>
            <header className="center">
                <img src={Logo} alt='' />
            </header>
        </div>
    )
}

export default header;