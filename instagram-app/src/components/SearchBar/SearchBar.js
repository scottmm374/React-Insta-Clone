import React from 'react';
// import cameraLogo from './assets/cameraLogo.svg';

function SearchBar () {
    return (
        <div>
            <header>
               {/* <img src={cameraLogo} /> */}
                <img></img>
                <form><input placeholder="Search" type="text"/></form>
                
               
            </header>
        </div>
    )
}

export default SearchBar;