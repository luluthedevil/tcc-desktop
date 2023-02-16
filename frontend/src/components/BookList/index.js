import React, {useRef} from 'react';
import Book from '../Book';
import './style.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Link } from "react-router-dom";

export default function Booklist({title, livros, showModal}) { 
  const handleBook = (book, index) => (
    <div className="item" key={index}>
      <Book key={book.isbn13} info={book}
      thumbnail={book.image}
      showModal={showModal}
      title={book.title}
      author={book.author}
      />
    </div>
  );

  const carousel = useRef(null);

  const handleClickLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= (carousel.current.offsetWidth / 2);
  };

  const handleClickRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += (carousel.current.offsetWidth / 2);
  };

  return (
    <div className="container-books">
      <div className="carousel-text">
        <h4 className="book-list-title">{title}</h4>
        <Link to={
          title === "Livros lidos" 
          ? "livros-lidos"
          : "livros-a-ler"} 
          className="see-all-btn"
          state={{
            title: title,
            books: livros
          }}
          >
            Ver todos
        </Link>
      </div>     
      <div className="container-content">
        <button className="button" onClick={handleClickLeft}>
          <IoIosArrowDropleft size={50} color="#fff" />
        </button>
        <div className="books carousel" ref={carousel}>
          {livros.map((book, index) => (
                handleBook(book, index)
          ))}
        </div>
        <button className="button" onClick={handleClickRight}>
          <IoIosArrowDropright size={50} color="#fff" />
        </button>
      </div>
    </div>
  );
}
