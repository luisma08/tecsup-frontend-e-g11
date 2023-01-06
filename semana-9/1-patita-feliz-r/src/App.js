import './App.css';
import Header from './components/sections/header';

function App() {
  const company = {
    name: 'Patito Feliz 🦆',
    slogan: 'La mejor veterinaria del Peru'
  };
  return (
    <Header company={company}/>
  );
}

export default App;
