import React, {useState} from "react";

export default function Userlist({data, handleClick}){

    return(
        <div className="characterList userlist">
            <h1>Userlist</h1>
            <ul className='imageList'>
                {data.map((item) => (
                    <li onClick={()=>handleClick(item.id)} id={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}