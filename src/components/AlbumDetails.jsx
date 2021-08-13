// https://striveschool-api.herokuapp.com/api/deezer/Album/{id}
import { useState, useEffect } from "react"
import Albums from './Albums'

const AlbumDetails = ({match}) => {

    const [info, setInfo] = useState('')

    useEffect(()=>{
console.log("here")
        const getAlbumId = async () =>{

            let id = match.params.albumId
            if(id){
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
            let AlbumId = await response.json()
            setInfo(AlbumId)    
            console.log('what is this', AlbumId);
            }    
        }
        getAlbumId()
        

    },[])

    

    return (  
        <div>
            {
                <Albums obj={info} />
                
            }
        </div>
    );
}
 
export default AlbumDetails;