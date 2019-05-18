import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem/galleryItem';
import style from './gallery.module.css';

const Gallery = ({ fotoArr, openModal }) => (
  <ul className={style.gallery}>
    {fotoArr.map(foto => (
      <GalleryItem
        key={foto.id}
        {...foto}
        openModal={() => openModal(foto.id)}
      />
    ))}
  </ul>
);

Gallery.propTypes = {
  fotoArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
export default Gallery;
