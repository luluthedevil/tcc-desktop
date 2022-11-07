import React, {useState, useEffect} from 'react';
import './style.css';
import Booklist from '../../components/BookList';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function LibraryScreen() {

  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios.get(`https://sheet.best/api/sheets/${process.env.REACT_APP_GOOGLE_SHEET_LINK}`).then(
      response => {
        setBookList(response.data)
      }
    )
  }, [])
  return (
    <div className="container-library">
      <h2 className="title">Biblioteca</h2>
      <Booklist 
        title="Livros"
        livros={bookList}
        isLibrary={true}
      />
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
