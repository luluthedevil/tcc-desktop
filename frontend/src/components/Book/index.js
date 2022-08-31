import React from 'react';
import './style.css';

export default function Book({info}) {
  return (
    <div className="individual-book">
      <img alt="Capa do livro" className="book-poster" src={info.poster} />
      <span>{info.title}</span>
      <p>{info.author}</p>
    </div>
  );
}
