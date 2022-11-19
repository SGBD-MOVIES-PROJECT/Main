import { useEffect,useState } from "react";
import axios from "axios";


function SearchBar() {

  const [movies, setMovies]= useState([]); //datos forma dinamica 
  const [movieTable, setMovieTables]= useState([]); //datos forma estatica
  const [search, setSearch]= useState(""); //datos de busqueda

const peticionGet=async()=>{
  await axios.get("http://127.0.0.1:8000/api/pelicula/filtro?format=json") //api rest url 
  .then(response=>{
    setMovies(response.data);
    setMovieTables(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setSearch(e.target.value);
  //filter(e.target.value);
}
/*
const filter=(terminoBusqueda)=>{
  var resultadosBusqueda=movieTable.filter((elemento)=>{
    if(elemento.original_title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setMovies(resultadosBusqueda);
}
* */
useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="App">
    <div className="containerInput">
      <input
        className="form-control inputBuscar"
        value={search}
        placeholder="Busca una peli..."
        onChange={handleChange}
      />
      <button className="btn btn-success">
      </button>
    </div>

   <div className="table-responsive">
     <table className="table table-sm table-bordered">
       <thead>
         <tr>
           
           <th>Titulo</th>
           <th>Genero</th>
           <th>Idioma</th>
           <th>Compañia</th>
           <th>Fecha de estreno</th>
           
         </tr>
       </thead>

       <tbody>
         {movies && 
         movies.map((movie)=>(
             <tr key={movie.original_title}>
              <td>{movie.original_title}</td>
              <td>{movie.genre}</td>
              <td>{movie.original_language}</td>
              <td>{movie.production_company}</td>
              <td>{movie.release_date}</td>

           </tr>
         ))}
       </tbody>

     </table>

   </div>
  </div>
  );
}

export default SearchBar;