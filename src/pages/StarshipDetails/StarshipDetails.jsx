import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })

  return ( 
    <>
      {StarshipDetails.name ?
        <div>  
          <h1>{starshipDetails.name} Details</h1>
            <div class="starship-details">
              <h2>NAME: {starshipDetails.name}</h2>
              <h2>MODEL: {starshipDetails.model}</h2>
              <a class="return-link" href='/'><h2>RETURN</h2></a>
            </div>
        </div>
        :
        <>
        <h2 className='loading'>Loading Starship Details...</h2>
        </>
        }
    </>
   );
}
 
export default StarshipDetails;