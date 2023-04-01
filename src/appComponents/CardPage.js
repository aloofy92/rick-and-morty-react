

import React, { useState, useEffect, useCallback } from 'react'

export default function CartoonPage ({ rmcharacters, setRMCharacters }) {

    const [rmPage, setRMPage] = useState(1);

    const getRMCharacters = useCallback(() => {

      fetch(`https://rickandmortyapi.com/api/character/?page=${rmPage}`)

        .then((response) => response.json())

        .then((data) => setRMCharacters(data.results));

    }, [setRMCharacters, rmPage]);
  
    useEffect(() => {

      getRMCharacters();

    }, [getRMCharacters]); 
  

    return (
      <div className="rmCardPage">

          <button className="rmPage-button" onClick={() => setRMPage(rmPage - 1)} 
          disabled={rmPage === 1}>Previous</button>

          <p className="rmCardPage">Page {rmPage}</p>
          
          <button className="rmCardPage--button" onClick={() => setRMPage(rmPage + 1)}
           disabled={rmPage === 21}>Next</button>
      </div>
  )
}
