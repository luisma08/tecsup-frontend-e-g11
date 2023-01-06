import './App.css';
import Header from './components/sections/Header.jsx';
import Footer from './components/sections/Footer.jsx';
import Appointments from './pages/Appointments';

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
      <main>
        <Appointments />
      </main>
      <Footer credits={credits}/>
    </>
  );
}

export default App;
