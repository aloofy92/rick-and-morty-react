import React, { useState, useEffect } from 'react'
import CardInfo from './CardInfo'
import CardPage from './CardPage'

export default function RMCardContent () {
    
        const [rmCharacters, setRMCharacters] = useState([])
    
        useEffect(() => {

            fetch('https://rickandmortyapi.com/api/character')

            .then(res => res.json())

            .then(data => {
                
                setRMCharacters(data.results)
            })
        }, [])
    
        return (
            <div className="rmCardContent">

                <CardPage rmCharacters={rmCharacters} setCharacters={setRMCharacters} />

                {rmCharacters.map(character => {

                    return <CardInfo key={character.id} rmCharacter={character} />
                })}
            </div>
        )
    }