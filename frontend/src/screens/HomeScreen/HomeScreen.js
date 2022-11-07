import React from 'react';
import './style.css';

export default function HomeScreen() {
  return (
    <div className="container-home">
      <h2>Livro mais lido da semana: </h2>
      {/* <BookDetails book={Books[1]} details={false} /> */}
      <h3>Livros recomendados para você:</h3>
      {/* <Booklist 
        title="Livros de Fantasia" 
        type="Fantasia "
      /> */}
    </div>
  );
}
