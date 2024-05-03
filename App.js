// App.js
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [headerImage, setHeaderImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeaderImage();
    fetchImages();
  }, [page]); // Fetch images when page changes

  const fetchHeaderImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/1200/50');
      if (!response.ok) {
        throw new Error('Failed to fetch header image');
      }
      const url = response.url;
      setHeaderImage(url);
    } catch (error) {
      console.error('Error fetching header image:', error);
      setError('Failed to load header image');
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(prevImages => [...prevImages, ...data]);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to load images');
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src="path/to/logo.png" alt="Logo" width="30" height="30" className="mr-2" />
          </a>
          <h1 className="text-center mb-0">Site Title</h1>
          <div></div> 
        </div>
      </nav>

      {headerImage && (
        <header className="header">
          <img src={headerImage} alt="Header" width={'100%'} height={'400px'}/>
        </header>)}

      {error && <div className="error">{error}</div>}
      <div className="container mt-4">
        <h1 className="text-center">Image Gallery</h1>
        <Gallery images={images} />
        <Pagination onLoadMore={handleLoadMore} />
      </div>
    </div>
  );
};

export default App;
