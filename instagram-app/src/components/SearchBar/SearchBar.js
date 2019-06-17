import React from 'react';
// import cameraLogo from '../assets/cameraLogo.svg';


function SearchBar() {
    return (
        <div className="searchContainer">
            <div className="imageCont">
                {/* <img alt="camera" src={cameraLogo} className="cameraImg" /> */}
            </div>
            <div>
                <form><input placeholder="Search" type="text" /></form>
            </div>

        </div>
    )
}

export default SearchBar;