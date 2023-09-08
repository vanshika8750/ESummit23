import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbaar from './components/Navbaar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Team from './pages/Team';
import ESummit from './pages/ESummit';
import PastPartners from './pages/PastPartners';
import Events from './pages/Events';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbaar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/eSummit' element={<ESummit/>}/>
      <Route path='/pastPartners' element={<PastPartners/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
