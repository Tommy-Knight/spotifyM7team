// https://striveschool-api.herokuapp.com/api/deezer/Album/{id}
import { useState, useEffect } from "react"
import AlbumPage from './AlbumPage'

const AlbumDetails = ({match}) => {

    const [info, setInfo] = useState(null)

    useEffect(()=>{

        const getAlbumId = async () =>{

            let id = match.params.AlbumId
            if(id){
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
            let AlbumId = await response.json()
            console.log(AlbumId);
            setInfo(AlbumId)    
            }    
        }
        getAlbumId()
        

    },[match.params.AlbumId])

    

    return (  
        <div>
            {
                <AlbumPage obj={info} />
                
            }
        </div>
    );
}
 
export default AlbumDetails;