import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css';
import Book from '../../components/Book';
import semCapa from '../../imgs/capa_para_sem_capa.png';
import Modal from '../../components/Book/Modal';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function BookListingScreen() {
  const location = useLocation();
  const {title, books} = location.state;
  const [showModal, setShowModal] = useState(false);
  const [bookModal, setBookModal] = useState({});
  const [bookImg, setBookImg] = useState("");
  const navigate = useNavigate();
  const displayModal = (bookInfo) => {
    setBookModal(bookInfo);
    setBookImg(bookInfo.image);
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
              title={item.title}
              author={item.author}
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
        isRead={bookModal.isRead}
        isbn={bookModal.isbn13}
      />
    </div>
  );
}
