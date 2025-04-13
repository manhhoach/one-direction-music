import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Band from './pages/Band'
import Music from './pages/Music'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' index element={<Navigate to='/home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='music' element={<Music />}></Route>
          <Route path='band' element={<Band />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
