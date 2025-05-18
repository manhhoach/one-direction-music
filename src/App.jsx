import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Band from './pages/Band'
import Music from './pages/Music'
import BandManager from './pages/admin//band/BandManager'
import SongManager from './pages/admin/song/SongManager'
import AlbumManager from './pages/admin/album/AlbumManager'
import NotFound from './ui/NotFound'
import AdminLayout from './ui/AdminLayout'
import AlbumDetail from './pages/AlbumDetail'
import SongDetail from './pages/SongDetail'
import AlbumPhotos from './pages/AlbumPhotos'
import SongPhotos from './pages/SongPhotos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' index element={<Navigate to='/home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='music' element={<Music />}></Route>
          <Route path='music/albums/:slug' element={<AlbumDetail />} />
          <Route path='music/albums/:slug/photos' element={<AlbumPhotos />} />
          <Route path='music/albums/:albumSlug/photos/:songSlug' element={<SongPhotos />} />
          <Route path='music/albums/:albumSlug/songs/:songSlug' element={<SongDetail />} />
          <Route path='band' element={<Band />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="band" element={<BandManager />} />
          <Route path="song/:albumId" element={<SongManager />} />
          <Route path="album" element={<AlbumManager />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
