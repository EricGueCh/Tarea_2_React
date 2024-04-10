import { useEffect, useState } from "react"
import { getCategoryGif } from "../actions/api.gif"
import "../style.css";

export const CardGif=(props)=>{

    const {category}=props

    const [gifs, setGifs]=useState([])

    useEffect(()=>{
        getCategoryGif(category).then(res => setGifs(res.results))
    },[])

    console.log("gifs", gifs)
    return(
        <div>
            <h2>Gifs de The Rick and Morty</h2>
            {
                gifs.map((gif)=>(
                    <div className="card-rickandmorty">
                        <img src={gif.image} />
                        <h5>Nombre: {gif.location.name}</h5>
                        <h5>Locación: {gif.name}</h5>
                        <h5>First seen: {gif.created}</h5>
                        <h5>Tipo: {gif.type}</h5>
                        <h5>Vivo o Muerto: {gif.status}</h5>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}