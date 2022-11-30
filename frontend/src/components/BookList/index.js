import React, {useRef} from 'react';
import Book from '../Book';
import './style.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

export default function Booklist({title, livros, showModal, thumbnail}) { 
  const handleBook = (book, index) => (
    <div className="item" key={index}>
      <Book key={book.title} info={book}
      thumbnail={book.image}
      showModal={showModal}
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
      <h4>{title}</h4>      
        <div className="container-content">
          <button className="button" onClick={handleClickLeft}>
            <IoIosArrowDropleft size={50} color="#fff" />
          </button>
          <div className="books carousel" ref={carousel}>
            {livros.map((book, index) => (
              // console.log(book)
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
