import './App.css';
import Header from './components/sections/header';
import Footer from './components/sections/footer';

function App() {
  const company = {
    name: 'Patito Feliz 🦆',
    slogan: 'La mejor veterinaria del Peru'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Jorge Mayta'
  };

  return (
    <>
      <Header company={company}/>
      <Footer credits={credits}/>
    </>
  );
}

export default App;
