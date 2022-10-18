import React, {useState} from 'react';
import Modal from './Modal';
import './style.css';

export default function Book({info}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="individual-book" onClick={() => setShowModal(!showModal)}>
      <img 
        alt="Capa do livro" 
        className="book-poster"
        src={
          info.volumeInfo.imageLinks 
          && 
          info.volumeInfo.imageLinks.smallThumbnail
        } 
      />
      <span className="book-title">{info.volumeInfo.title}</span>
      <p className="book-author">{info.volumeInfo.authors + ''}</p>
      <Modal 
        showModal={showModal} 
        info={info} 
        onClose={() => setShowModal(!showModal)}
      />
      {console.log(showModal)}
    </div>
  );
}
