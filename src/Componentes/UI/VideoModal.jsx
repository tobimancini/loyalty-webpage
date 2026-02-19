import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './VideoModal.css';

const Modal = ({ videoSrc, onClose }) => {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 400);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleClose]);

  return createPortal(
    <div
      className={`video-modal-overlay ${visible ? 'video-modal-overlay--visible' : ''}`}
      onClick={handleClose}
    >
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={handleClose}>
          CERRAR &times;
        </button>
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>,
    document.body
  );
};

const VideoModal = ({ videoSrc, thumbnailSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="video-thumbnail" onClick={() => setIsOpen(true)} role="button" tabIndex={0} aria-label="Reproducir video">
        <video src={thumbnailSrc || videoSrc} muted playsInline preload="metadata" />
        <div className="play-button">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      {isOpen && <Modal videoSrc={videoSrc} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default VideoModal;
