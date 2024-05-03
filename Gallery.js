import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div>
      {/* First row */}
      <div className="row mb-3">
        {/* First Image (spanning 8 columns on desktop) */}
        {images.length > 0 && (
          <div className="col-12 col-md-8 mb-3">
            <img className="img-fluid" src={images[0].download_url} alt={images[0].author} />
          </div>
        )}

        {/* Third and Fourth Images (spanning 4 columns on desktop) */}
        {images.length > 2 && (
          <div className="col-12 col-md-4">
            <div className="row mb-3">
              <div className="col-12">
                <img className="img-fluid" src={images[2].download_url} alt={images[2].author} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <img className="img-fluid" src={images[3].download_url} alt={images[3].author} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Second row */}
      <div className="row">
        {/* Second Image (spanning 6 columns on desktop) */}
        {images.length > 1 && (
          <div className="col-12 col-md-6 mb-3">
            <img className="img-fluid" src={images[1].download_url} alt={images[1].author} />
          </div>
        )}

        {/* Fifth Image (spanning 6 columns on desktop) */}
        {images.length > 4 && (
          <div className="col-12 col-md-6 mb-3">
            <img className="img-fluid" src={images[4].download_url} alt={images[4].author} />
          </div>
        )}

        {/* Remaining Images (spanning 3 columns each) */}
        {images.slice(5).map((image, index) => (
          <div key={index} className="col-12 col-md-4 mb-3">
            <img className="img-fluid" src={image.download_url} alt={image.author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
