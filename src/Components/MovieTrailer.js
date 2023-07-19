import { useNavigate, useParams } from "react-router-dom"



const MovieTrailer=(movies)=>{
    const {id}= useParams()
    const found =movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()
    return(
    <div>
        <h1>{found.title}</h1>
        <h2>{found.description}</h2>
        <img src={found.posterURL} alt="NT" />
        <iframe width="560" height="315" src={found.trailer} frameborder="0"></iframe>
        <button onClick={()=>navigate("/")}>Home</button>
    </div>
    )
}
export default MovieTrailer