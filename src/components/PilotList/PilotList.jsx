import React, { useState, useEffect } from 'react';
import { getPilots } from '../../services/sw-api';

const PilotList = (props) => {
  const [pilotObject, setPilotObject] = useState([])

  useEffect(() => {
    getPilots(props.pilots)
    .then(pilot => setPilotObject(pilot))
  }, [])

  return ( 
    <>
      {pilotObject.length ?
        <div>
          {pilotObject.map(pilot => 
            <p key={pilot.name}>
              {pilot.name}
            </p>
          )}
        </div>
        :
        <>
          <h5 className='loading'>Pilots are suiting up!!</h5>
        </>
      }
    </>
   );
}
 
export default PilotList;
