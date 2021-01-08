
const baseUrl = "https://swapi.dev/api/starships/";

export function getAllStarships(){
    return fetch(`${baseUrl}`)
    .then(res => res.json())
}

export function getDetails(apiUrl){
    return fetch(`${apiUrl}`)
    .then(res =>  res.json())
}