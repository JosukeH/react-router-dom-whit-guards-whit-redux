export const baseUrl = 'https://rickandmortyapi.com/api/'
const characterUrl = baseUrl + 'character/'

export const getMorty = async () => {
  return fetch(characterUrl+ '2')
    .then(res => res.json())
    
}