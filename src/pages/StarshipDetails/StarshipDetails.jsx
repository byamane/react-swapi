import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getStarshipDetails } from '../../services/sw-api';
import PilotList from '../../components/PilotList/PilotList';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })

  return ( 
    <>
      {starshipDetails.name ?
        <div>  
          <h1>{starshipDetails.name} Details</h1>
            <div className="starship-details">
              <h2>NAME: {starshipDetails.name}</h2>
              <h2>MODEL: {starshipDetails.model}</h2>
              <h2>PILOTS:</h2>
                {starshipDetails.pilots.length ?
                  <>
                    <h2>
                      <PilotList pilots={starshipDetails.pilots} />
                    </h2>
                  </>
                  :
                  <>
                    <h3>No Pilots for this Starship</h3>
                  </>
                } 
              <a className="return-link" href='/'>
                <h2>RETURN</h2>
              </a>
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