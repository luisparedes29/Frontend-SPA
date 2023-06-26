import { useState } from "react"
import { Contexto } from "./context"
export default function ContextFunctions({children}){

    const [name, setName] = useState('holo')

    return(
        <Contexto.Provider value={{name, setName}}>
            {children}
        </Contexto.Provider>
    )

}