import { useParams } from "react-router-dom"

const Characters =()=>{
    const {id} = useParams()
    
    return(
        <div>
            <h1>El Personaje tiene el ID:{id}</h1>
        </div>
    )
}

export default Characters;