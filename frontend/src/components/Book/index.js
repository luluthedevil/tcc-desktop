import React, {useState} from 'react';
import Modal from './Modal';
import './style.css';

export default function Book({info, sheet = false}) {
  const [showModal, setShowModal] = useState(false);
  let infoJSON = true;
  if(sheet){
    infoJSON = JSON.parse(info.volumeInfo);
  }
  return (
    <div className="individual-book" onClick={() => setShowModal(!showModal)}>
      <img 
        alt="Capa do livro" 
        className="book-poster"
        src={
         ( info.volumeInfo.imageLinks 
          && 
          info.volumeInfo.imageLinks.smallThumbnail)
          || 
          (infoJSON.imageLinks 
          && 
          infoJSON.imageLinks.smallThumbnail)
        } 
      />
      <span className="book-title">{info.volumeInfo.title || infoJSON.title}</span>
      <p className="book-author">{info.volumeInfo.authors || infoJSON.authors + ''}</p>
      <Modal 
        showModal={showModal} 
        info={info} 
        onClose={() => setShowModal(!showModal)}
      />
    </div>
  );
}
