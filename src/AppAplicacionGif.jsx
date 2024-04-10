import { useState } from "react"
import { CardGif, FormGif } from "./components"
import "./style.css";

export const AppAplicacionGif=()=>{

    const[categories, setCategories]=useState(["1"])

    const addCategory=(category)=>{
        setCategories([category, ...categories])
    }

    return(
        <div className="footer-principal">
            <h1>Aplicación The Rick and Morty</h1>
            <FormGif addCategory={addCategory}/>
            {categories.map((category)=>(
                <div>{category}</div>
            ))}

            {
                categories.map((category)=>(
                    <CardGif key={category} category={category}/>
                ))
            }
            
        </div>
    )
}