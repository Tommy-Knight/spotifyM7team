



const AlmumPage = ({obj}) => (
   
    <div className='text-center text-white'>
    <h2> {obj?.name}</h2>
    <img src={obj?.picture_medium} alt = 'movie poster' />
    
    </div>
 
)

export default AlmumPage;