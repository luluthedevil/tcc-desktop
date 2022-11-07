import React, {useState} from 'react';
import './style.css';
import Book from '../../components/Book';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function BooksScreen() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) => {
    if(evt.key === 'Enter'){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=20`)
      .then(res=>{
        setBookData(res.data.items)
        //console.log(res.data.items)
      })
      .catch(err=>console.log(err))
    }
  }
  return (
    <div className="container-books">
      <h2 className="title">Pesquisar</h2>
      <div className="book-input">
        <input
          value={search}
          onChange={e=>setSearch(e.target.value)} 
          onKeyPress={searchBook}
          type="text" 
          placeholder="Nome do livro"
          />
        <button><BsSearch size={18} /></button>
      </div>
      <div className="books-display">
        {
          bookData.map((item)=> (
            <Book key={item.id} info={item} />
          ))
        }
      </div>
    </div>
  );
}
