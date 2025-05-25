import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Band from './pages/Band'
import Music from './pages/Music'
import SingerManager from './pages/admin/singer/SingerManager'
import SongManager from './pages/admin/song/SongManager'
import AlbumManager from './pages/admin/album/AlbumManager'
import NotFound from './ui/NotFound'
import AdminLayout from './ui/AdminLayout'
import AlbumDetail from './pages/AlbumDetail'
import SongDetail from './pages/SongDetail'
import AlbumPhotos from './pages/AlbumPhotos'
import SongPhotos from './pages/SongPhotos'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' index element={<Navigate to='/home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='1d/login' element={<Login />}></Route>
          <Route path='1d/register' element={<Register />}></Route>
          <Route path='music' element={<Music />}></Route>
          <Route path='music/albums/:slug' element={<AlbumDetail />} />
          <Route path='music/albums/:slug/photos' element={<AlbumPhotos />} />
          <Route path='music/albums/:albumSlug/photos/:songSlug' element={<SongPhotos />} />
          <Route path='music/albums/:albumSlug/songs/:songSlug' element={<SongDetail />} />
          <Route path='band' element={<Band />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<RequireAuth />} >
          <Route element={<AdminLayout />}>
            <Route path="singer" element={<SingerManager />} />
            <Route path="song/:albumId" element={<SongManager />} />
            <Route path="album" element={<AlbumManager />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
