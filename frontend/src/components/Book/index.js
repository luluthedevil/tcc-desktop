import React from 'react';
import './style.css';

export default function Book({info}) {
  return (
    <div className="individual-book">
      <img 
        alt="Capa do livro" 
        className="book-poster"
        src={
          info.volumeInfo.imageLinks 
          && 
          info.volumeInfo.imageLinks.smallThumbnail
        } 
      />
      <span className="book-title">{info.volumeInfo.title}</span>
      <p className="book-author">{info.volumeInfo.authors + ''}</p>
    </div>
  );
}
