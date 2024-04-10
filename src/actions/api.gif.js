export const getCategoryGif=async(category)=>{
    const response=await fetch(`https://rickandmortyapi.com/api/character?page=${category}`)
    const data=await response.json()
    return data
}