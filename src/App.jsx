import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Band from './pages/Band'
import Music from './pages/Music'
import BandManager from './pages/admin/BandManager'
import MusicManager from './pages/admin/MusicManager'
import AlbumManager from './pages/admin/AlbumManager'
import NotFound from './ui/NotFound'
import AdminLayout from './ui/AdminLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' index element={<Navigate to='/home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='music' element={<Music />}></Route>
          <Route path='band' element={<Band />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="band" element={<BandManager />} />
          <Route path="music" element={<MusicManager />} />
          <Route path="album" element={<AlbumManager />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
