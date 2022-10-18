import React, {useState, useEffect} from 'react';
import './style.css';
import Booklist from '../../components/BookList';
import axios from 'axios';

export default function LibraryScreen() {

  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3333/books?limit=4&offset=0').then(
      response => {
        setBookList(response.data)
      }
    )
  }, [])
  return (
    <div className="container-library">
      <h2 className="title">Biblioteca</h2>
      {bookList.map((item, index) => (
        <div>
          <p key={index}>{item.bookName}</p>
          <img alt="book cover" src={`https://covers.openlibrary.org/b/isbn/${item.ISBN_10}-M.jpg`} />
        </div>
      ))}
      {/* <Booklist 
        title="Livros favoritos"
        type="favorite"
      />
      <Booklist 
        title="Todos os livros lidos"
        type="read"
      /> */}
    </div>
  );
}
