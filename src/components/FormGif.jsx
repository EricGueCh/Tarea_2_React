import { useState } from "react";
import "../style.css";

export const FormGif=(props)=>{

    const {addCategory}=props

    const [category,setCategory]=useState("")

    const handleInput=(event)=>{
        setCategory(event.target.value)
    }
    const handleSubmitGif=(event)=>{
        event.preventDefault()
        addCategory(category)
        setCategory("")
    }
    return(
        <form onSubmit={handleSubmitGif}>
            <label>Ingresa el Nro de Pagina de Consulta...</label><br />
            <input onChange={handleInput} type="text" placeholder="Ejemplo: 3" value={category}/>
            <button>Buscar</button>
        </form>
    )
}