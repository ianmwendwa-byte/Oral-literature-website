import React from 'react'
import './App.css';
import Introduction from './Components/Introduction';
import { Route, Routes } from 'react-router-dom';
import TongueTwisters from './Components/TongueTwisters';
import Narratives from './Components/Narratives';
import Riddles from './Components/Riddles';
import Proverbs from './Components/Proverbs';

function App() {
  return (
    <div className='min-h-full overflow-hidden'>
  <Routes>
    <Route path='/' element={<Introduction/>}/>
    <Route path='/tonguetwister' element={<TongueTwisters/>}/>
    <Route path='/narratives' element={<Narratives/>}/>
    <Route path='/riddles' element={<Riddles/>}/>
    <Route path='/proverbs' element={<Proverbs/>}/>
  </Routes>
    
    </div>
  );
}

export default App;
