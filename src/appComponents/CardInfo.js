

import React, { useState } from 'react'

export default function RMCardInfo({ rmCharacter }) {

    const [rmCard, setRM] = useState(true);

    const rmCharacters = () => {

        setRM();
    }
    return (

        <div className="rmcard" >
            
                <div className={"rmcard--front"}>

                    <img className="rmcard--image" src={rmCharacter.image} alt={rmCharacter.name} />

                    <div className="rmcard--content">

                        <h2 className="rmcard--title">{rmCharacter.name}</h2>

                        <p className="rmcard--text">Status: {rmCharacter.status}</p>

                        <p className="rmcard--text">Species: {rmCharacter.species}</p>

                        {rmCharacter.type && <p className="rmcard--text">Character Type: {rmCharacter.type}</p>}

                        {rmCharacter.gender && <p className="rmcard--text">Character Gender: {rmCharacter.gender}</p>}

                        <p className="rmcard-text-1">Location: {rmCharacter.location.name}</p>

                        <p className="rmcard-text-2">Origin: {rmCharacter.origin.name}</p>

                        <p className="rmcard-text-3">Episodes: {rmCharacter.episode.length}</p>

                </div>
                </div>
                </div>
                
            )}
       

    
