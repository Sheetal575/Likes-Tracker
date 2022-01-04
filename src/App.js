import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar/navbar'
import AppContainer from './Components/app-container/app-container';
import Routing from './Components/routing';
function App() {
  return (
    <div className='home'>
      <Routing />
    </div>
  );
}

export default App;
