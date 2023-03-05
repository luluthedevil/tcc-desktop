import React, {useState} from 'react';
import './style.css';
import Book from '../../components/Book';
import { BsSearch } from 'react-icons/bs';
import semCapa from '../../imgs/capa_para_sem_capa.png';
import axios from 'axios';
import Modal from '../../components/Book/Modal';

export default function BooksScreen() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const searchBook = (evt) => {
    if(evt.key === 'Enter'){
      axios.get(`http://localhost:3333/books/find?nome=${search}`)
      .then(res=>{
        setBookData(res.data.items)
      })
      .catch(err=>console.log(err))
    }
  }
  const [bookModal, setBookModal] = useState({});
  const [bookImg, setBookImg] = useState("");
  const displayModal = (bookInfo) => {
    setBookModal(bookInfo);
    console.log(bookInfo.industryIdentifiers[0].identifier)
    setBookImg((bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail) ? bookInfo.imageLinks.smallThumbnail : semCapa);
    setShowModal(!showModal);
  }
  return (
    <div className="container-search">
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
            <Book key={item.id} info={item.volumeInfo}
            showModal={displayModal}
            thumbnail={(item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) ? item.volumeInfo.imageLinks.smallThumbnail : semCapa}
            title={item.volumeInfo.title}
            author={item.volumeInfo.authors}
            />
          ))
        }
      </div>
      <Modal 
        showModal={showModal} 
        info={bookModal} 
        onClose={() => setShowModal(!showModal)}
        thumbnail={bookImg}
        title={bookModal.title}
        author={bookModal.authors}
        publisher={bookModal.publisher}
        publishedDate={bookModal.publishedDate}
        previewLink={bookModal.previewLink}
        description={bookModal.description}
        isbn={bookModal.industryIdentifiers?.[0].identifier}
      />
    </div>
  );
}
