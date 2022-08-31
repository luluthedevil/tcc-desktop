import React, {useRef} from 'react';
import Book from '../Book';
import './style.css';
import Books from '../../data/Books';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

export default function Booklist({title, type}) {
  const handleBook = (type, book, index) => (
    <div className="item" key={index}>
      <Book key={book.id} info={book}
      />
    </div>
  )
  const bookRender = (type, book, index) => {
    if(type === "favorite"){
      return (book.favorite
      ? (handleBook(type, book, index))
      : null)
    }
    if(type === "read"){
      return (book.isRead
      ? (handleBook(type, book, index))
      : null)
    }
  };

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
            {Books.map((book, index) => (
              bookRender(type, book, index)
            ))}
          </div>
          <button className="button" onClick={handleClickRight}>
            <IoIosArrowDropright size={50} color="#fff" />
          </button>
      </div>
    </div>
  );
}
