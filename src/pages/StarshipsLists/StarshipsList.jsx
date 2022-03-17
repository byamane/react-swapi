import { useEffect, useState } from "react";
import { getStarshipsList } from "../../services/sw-api";
import { Link } from "react-router-dom";

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
        {starshipsList.map((starship) => (
          <button>
            <Link
              to="/starship"
              state={{ starship }}
              key={starship.name}
            >
              {starship.name}
            </Link>
          </button>
        ))}
      </div>
    </>
  );
}
 
export default StarshipsList;