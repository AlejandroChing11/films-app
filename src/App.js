import logo from './logo.svg';
import './App.css';
import Film from './Film';
import PageWrapper from './PageWrapper';

function App() {
  let peliculas = [
    {
      title: "Oblivion (2012)",
      calification: "8.1",
      director: "Joss Whedon",
      actors: "Robert Downey Jr., Chris Evans, Chris Hemsworth",
      date: "1 may 2015",
      duration: "2h 21mins",
      img: "images/uploads/mv1.jpg"
    },
    {
      title:"into the wild (2014)",
      calification: "7.8", 
      director:"Anthony Russo, Joe Russo", 
      actors:"Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      date:"1 May 2015", 
      duration:"2h 21mins", 
      img:"images/uploads/mv2.jpg"
    }
  ];
  return (
    <PageWrapper>
      <Film title="Oblivion (2012)" calification="8.1" director="Joss Whedon" actors="Robert Downey Jr., Chris Evans, Chris Hemsworth" date="1 may 2015" duration="2h 21mins"
        img="images/uploads/mv1.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
      </Film>

      
    </PageWrapper>

  );
}

export default App;
