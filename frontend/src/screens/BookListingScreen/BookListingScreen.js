import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import './style.css';
import Book from '../../components/Book';
import semCapa from '../../imgs/capa_para_sem_capa.png';
import Modal from '../../components/Book/Modal';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function BookListingScreen() {
  const location = useLocation();
  const {title, books} = location.state;
  const [showModal, setShowModal] = useState(false);
  const [bookModal, setBookModal] = useState({});
  const [bookImg, setBookImg] = useState("");
  const navigate = useNavigate();
  const displayModal = (bookInfo) => {
    setBookModal(bookInfo);
    setBookImg((bookInfo.imageLinks && bookInfo.imageLinks.smallThumbnail) ? bookInfo.imageLinks.smallThumbnail : semCapa);
    setShowModal(!showModal);
  }
  return (
    <div>
      <button className="go-back-button" onClick={() => navigate(-1)}><AiOutlineArrowLeft /> 
        Voltar
      </button>
      <h2 className="title">{title}</h2>
      <div className="books-display">
        {
          books.map((item)=> (
            <Book key={item.id} info={item}
            showModal={displayModal}
            thumbnail={item.image ? item.image : semCapa}
            />
          ))
        }
      </div>
      <Modal 
        showModal={showModal} 
        info={bookModal} 
        onClose={() => setShowModal(!showModal)}
        thumbnail={bookImg}
      />
    </div>
  );
}
