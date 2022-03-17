const baseUrl = 'https://swapi.dev/api'

export function getStarshipsList() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}