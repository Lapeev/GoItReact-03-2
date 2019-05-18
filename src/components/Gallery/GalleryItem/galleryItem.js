import React from 'react';
import PropTypes from 'prop-types';
import style from './galleryItem.module.css';

const GalleryItem = ({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  openModal,
}) => (
  <li className={style.galleryItem}>
    <img src={webformatURL} alt="" />

    <div className={style.stats}>
      <p className={style.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button
      onClick={openModal}
      type="button"
      className={style.fullscreenButton}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </li>
);

GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default GalleryItem;
