import logo from './logo.svg';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';
import PeliculasJson from './peliculas.json';
import Paginacion from './Paginacion'

function App() {
  let peliculas = PeliculasJson;



  return (
    <PageWrapper>


      {peliculas.map(pelicula =>
        <Film title={pelicula.title} calification={pelicula.calification} director={pelicula.director} actors={pelicula.actors} date={pelicula.date} duration={pelicula.duration}
          img={pelicula.img}>
          {pelicula.description}
        </Film>
      )
      };

      <Paginacion pagina={2} total={4} onChange={(pagina) => {
        alert(pagina)
      }} />

    </PageWrapper>

  );
}

export default App;
