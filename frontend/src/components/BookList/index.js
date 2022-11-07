import React, {useRef} from 'react';
import Book from '../Book';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

export default function Booklist({title, livros, isLibrary = false}) {
  const navigate = useNavigate();  
  const goToBookDetails = (book) => {
    let path = `/book-details`; 
    navigate(path, {state: {book: book}});
  };
  const handleBook = (book, index, isLibrary) => (
    <div className="item" key={index} onClick={() => goToBookDetails(book)}>
      <Book key={book.volumeInfo.title} info={book}
      sheet={isLibrary}
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
              handleBook(book, index, isLibrary)
            ))}
          </div>
          <button className="button" onClick={handleClickRight}>
            <IoIosArrowDropright size={50} color="#fff" />
          </button>
      </div>
    </div>
  );
}
