import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Insert from './pages/Insert'
import DataInd from './pages/DataInd'

function App() {
  return (
<>  

    <Router>
      <Routes>
        <Route path="/" element={<Insert/>}/>
        <Route path="/dataind" element={<DataInd/>}/>
      </Routes>
    </Router>

</>  )
}

export default App