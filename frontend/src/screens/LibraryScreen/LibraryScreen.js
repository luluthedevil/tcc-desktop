import React, { useEffect, useState } from 'react';
import './style.css';
import Booklist from '../../components/BookList';
import Modal from '../../components/Book/Modal';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

export default function LibraryScreen() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookModal, setBookModal] = useState({});
  const [bookImg, setBookImg] = useState("");
  const baseURL = 'http://localhost:3333/';

  useEffect(() => {
    axios.get(`${baseURL}books`)
    .then(response => {
      setData(response.data);
    })
    .catch((err) => console.log(err));
  }, []);
  const displayModal = (bookInfo, thumbnail) => {
    setBookModal(bookInfo);
    setBookImg(thumbnail);
    setShowModal(!showModal);
  }
  //add modal
  return (
    <div className="container-library">
      <h2 className="title">Biblioteca</h2>
      <Booklist 
        title={"Livros lidos"}
        livros={data}
        showModal={displayModal}
        thumbnail={bookImg}
      />
      <Modal 
        showModal={showModal} 
        info={bookModal} 
        onClose={() => setShowModal(!showModal)}
        thumbnail={bookImg}
      />
    </div>
  );
}
