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
      <h1>STAR WARS STARSHIPS</h1>
      <div className="button-container">
        {starshipsList.map((starship) => (
          <div className="starship-button">
            <Link
              to="/starship"
              state={{ starship }}
              key={starship.name}
              className="starship-link"
            >
              {starship.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default StarshipsList;