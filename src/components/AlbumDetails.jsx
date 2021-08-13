// https://striveschool-api.herokuapp.com/api/deezer/Album/{id}
import { useState, useEffect } from "react"
import Albums from './Albums'

const AlbumDetails = ({match}) => {

    const [info, setInfo] = useState(null)

    useEffect(()=>{

        const getAlbumId = async () =>{

            let id = match.params.albumId
            if(id){
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
            let AlbumId = await response.json()
            console.log('what is this', AlbumId);
            setInfo(AlbumId)    
            }    
        }
        getAlbumId()
        

    },[match.params.albumId])

    

    return (  
        <div>
            {
                <Albums obj={info} />
                
            }
        </div>
    );
}
 
export default AlbumDetails;