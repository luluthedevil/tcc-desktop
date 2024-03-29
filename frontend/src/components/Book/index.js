import React from 'react';
import semCapa from '../../imgs/capa_para_sem_capa.png';
import './style.css';

export default function Book({info, showModal, thumbnail, title, author}) {
  const imageRef = thumbnail ? thumbnail : semCapa; // get random img
  return (
    <div className="individual-book" onClick={() => showModal(info, thumbnail)}>
      <img 
        alt="Capa do livro" 
        className="book-poster"
        src={imageRef} 
      />
      <span className="book-title">{title}</span>
      <p className="book-author">{author}</p>
      
    </div>
  );
}
