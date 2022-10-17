import React, {useRef} from 'react';
import Book from '../Book';
import './style.css';
import Books from '../../data/Books';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

export default function Booklist({title, type}) {
  const navigate = useNavigate();  
  const goToBookDetails = (book) => {
    let path = `/book-details`; 
    navigate(path, {state: {book: book}});
  };
  const handleBook = (book, index) => (
    <div className="item" key={index} onClick={() => goToBookDetails(book)}>
      <Book key={book.id} info={book}
      />
    </div>
  );
  const bookRender = (type, book, index) => {
    if(type === "favorite"){
      return (book.favorite
      ? (handleBook(book, index))
      : null)
    }
    if(type === "read"){
      return (book.isRead
      ? (handleBook(book, index))
      : null)
    }
    if(type === "Fantasia "){
      return book.category.map((item) =>
        (item === type) ? (handleBook(book, index)) 
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
      {/* {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && bookList && <p>{bookList}</p>}

      {!loading && !error && !bookList && <p>No book to display</p>} */}
      
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
