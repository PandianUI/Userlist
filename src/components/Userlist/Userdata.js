import React, {useState} from "react";


export default function Userdata({newdata, returnBack}){

    return (
        <div className='characterList charDetails'>
        <h1>USer Details</h1>
            <div className="details">
                <div className='detailImg'>
                    <img src={newdata.image} alt={newdata.name} />
                </div>
                <div className="detailContainer">
                    <div className="detailRow">   
                        <div>Name</div>
                        <div>:</div>
                        <div><p>{newdata.name}</p></div>
                    </div>
                    <div className="detailRow">   
                        <div>Gender</div>
                        <div>:</div>
                        <div><p>{newdata.gender}</p></div>
                    </div>
                    <div className="detailRow">   
                        <div>Species</div>
                        <div>:</div>
                        <div><p>{newdata.species}</p></div>
                    </div>
                    <div className="detailRow">   
                        <div>Type</div>
                        <div>:</div>
                        <div><p>{newdata.type}</p></div>
                    </div>
                    <div className="detailRow">   
                        <div>Location</div>
                        <div>:</div>
                        <div><p>{newdata.location.name}</p></div>
                    </div>
                </div>
            </div>
            <button className="backtolist" onClick={returnBack}>Return to Listing Page</button>
            </div>
    )

}