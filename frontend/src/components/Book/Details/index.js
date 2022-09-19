import React from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function BookDetails({ book, details}) {
  const navigate = useNavigate();
  return (
    <div>
      {details ? <button className="go-back-button" onClick={() => navigate(-1)}><AiOutlineArrowLeft /> Voltar</button> 
      : null}
      <div className="container-book">
        <div className="book-details">        
          <div className="book">
            <div>
              <img className="book-poster" alt="Capa de livro" src={book.poster} />
            </div>
            <div className="book-info">
              <p><span>Título: </span>{book.title}</p>
              <p><span>Autor:  </span>{book.author}</p>
              <p><span>Ano de publicação: </span>{book.year}</p>
              <p><span>Categorias: </span>{book.category}</p>
            </div>
          </div>
          {details ? 
          <div className="favorite-button">
            {book.favorite ? <AiFillHeart size={40} color="#FF1493" /> : <AiOutlineHeart size={30} color="#FF1493" />}
          </div>
          : null}
        </div>
        {details ?  <div>
        <p className="book-sinopse">{book.sinopse}</p>
        </div>
        : null}
      </div>
    </div>
  );
}
