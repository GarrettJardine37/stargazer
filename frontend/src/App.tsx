import {Routes, Route} from 'react-router-dom';

import LightMap from './views/LightMap';
import './App.css'

const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<LightMap />} />
    </Routes>
  )
}

export default App