import { useEffect, useState } from "react";
import { getStarshipsList } from "../../services/sw-api";

const StarshipsList = (props) => {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    getStarshipsList()
    .then(starshipsData => setStarshipsList(starshipsData.results))
  })
  
  return ( 
    <>
      <h1>Starship Page</h1>
      <div>
        {starshipsList.map((starships) => (
          <p>{starships.name}</p>
        ))}
      </div>
    </>
  );
}
 
export default StarshipsList;