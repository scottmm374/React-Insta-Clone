import React from 'react';
// import iglogo from '.../assets/iglogo.png';

function SearchBar() {
    return (
        <div className="searchContainer">
            <div className="imageCont">
                {/* <img alt="Instagram Logo" src={iglogo} className="logo" /> */}
            </div>
            <div>
                <form><input placeholder="Search" type="text" /></form>
            </div>

        </div>
    )
}

export default SearchBar;