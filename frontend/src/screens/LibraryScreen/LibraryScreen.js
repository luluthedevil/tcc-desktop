import React from 'react';
import './style.css';
import Booklist from '../../components/BookList';

export default function LibraryScreen() {
  return (
    <div className="container-library">
      <h2 className="title">Biblioteca</h2>
      <Booklist 
        title="Livros favoritos"
        type="favorite"
      />
      <Booklist 
        title="Todos os livros lidos"
        type="read"
      />
    </div>
  );
}
