import './App.css';
import StarshipPage from './components/StarshipPage/StarshipPage'
import StarshipDetails from './components/StarshipPage/StarshipDetails'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Route exact path='/'render={()=><StarshipPage/>}/>
      <Route exact path='/starship' render={({location})=><StarshipDetails location={location}/>}/>
    </>
  );
}

export default App;
