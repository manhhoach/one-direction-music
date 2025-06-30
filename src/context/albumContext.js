import React, { createContext, useContext, useState } from 'react';

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
   const [albums, setAlbums] = useState({});

   const getAlbum = (id) => albums[id];

   const addAlbum = (album) => {
      setAlbums((prev) => {
         if (prev[album.id]) return prev;
         return {
            ...prev,
            [album.slug]: album,
         };
      });
   };

   return (
      <AlbumContext.Provider value={{ albums, getAlbum, addAlbum }}>
         {children}
      </AlbumContext.Provider>
   );
};

export const useAlbumContext = () => {
   const context = useContext(AlbumContext);
   if (!context) throw new Error('useAlbumContext must be used within AlbumProvider');
   return context;
};
