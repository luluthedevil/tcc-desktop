import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import './style.css';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function Modal ({
    showModal, //display modal
    info,
    onClose, //close modal
    thumbnail, //book image
    title, 
    author,
    publisher,
    publishedDate,
    previewLink,
    description,
    isRead = false,
    isbn
}){
    const [bookState, setBookState] = useState({});
    const baseURL = 'http://localhost:3333/';
    useEffect(() => {
        axios.get(`${baseURL}books/isbn/${isbn}`)
        .then(response => {
            if(response.data.length > 0){
                setBookState({ isRead: response.data.isRead});
            }
        })
        .catch((err) => console.log(err));
    });
    async function handleIsReadBook() {
        axios.post(`${baseURL}books`, {
            "image": thumbnail,
            "title": title,
            "author": author.join(", "),
            "publisher": publisher,
            "publishedDate": publishedDate,
            "previewLink": previewLink,
            "description": description,
            "isRead": true,
            "isbn13": isbn
        });
    }
    async function handleIsNotReadBook() {
        axios.post(`${baseURL}books`, {
            "image": thumbnail,
            "title": title,
            "author": author.join(", "),
            "publisher": publisher,
            "publishedDate": publishedDate,
            "previewLink": previewLink,
            "description": description,
            "isRead": false,
            "isbn13": isbn
        });
    }
    async function handleDeleteBook() {
        axios.get(`${baseURL}books/isbn/${isbn}`)
        .then(response => {
            if(response.data.length > 0){
                axios.delete(`${baseURL}books/${response.data[0]._id}`);
            }
        })
        .catch((err) => console.log(err));
    }
    async function handleMoveToReadBook() {
        axios.get(`${baseURL}books/isbn/${isbn}`)
        .then(response => {
            if(response.data.length > 0){
                axios.patch(`${baseURL}books/${response.data[0]._id}`, {
                    "isRead": true,
                });
            }
        })
        .catch((err) => console.log(err));
    }
    async function handleMoveToNotReadBook() {
        axios.get(`${baseURL}books/isbn/${isbn}`)
        .then(response => {
            if(response.data.length > 0){
                axios.patch(`${baseURL}books/${response.data[0]._id}`, {
                    "isRead": false,
                });
            }
        })
        .catch((err) => console.log(err));
    }
    if(!showModal) {
        return null;
    }
    return(
        <div className="overlay">
            <div className="overlay-inner">
                <div className="modal-buttons">
                    <div>
                        <div className="something">
                            {!info.hasOwnProperty('isRead') ?
                            <>
                                <button 
                                    className="save-btn read-btn"
                                    onClick={() => handleIsReadBook()}
                                >
                                    Já li ♥
                                </button>
                                <button 
                                    className="save-btn want-btn"
                                    onClick={() => handleIsNotReadBook()}
                                >
                                    Quero ler ♡
                                </button> 
                            </>
                            :
                            <> 
                            {isRead ?
                                <>
                                    <button 
                                        className="save-btn delete-btn"
                                        onClick={() => handleDeleteBook()}
                                    >
                                        Deletar de lidos
                                    </button>
                                    <button 
                                        className="save-btn want-btn"
                                        onClick={() => handleMoveToNotReadBook()}
                                    >
                                        Mover para quero ler
                                    </button>
                                </>
                                : 
                                <>
                                    <button 
                                        className="save-btn read-btn"
                                        onClick={() => handleMoveToReadBook()}
                                    >
                                        Mover para lidos
                                    </button>
                                    <button 
                                        className="save-btn delete-btn"
                                        onClick={() => handleDeleteBook()}    
                                    >
                                        Deletar de quero ler
                                    </button>
                                </>
                            }
                            </>
                            }
                        </div>
                    </div>
                    <div>
                        <button className="close-btn" onClick={() => onClose()}>
                            <GrClose />
                        </button>
                    </div>
                </div>
                <div className="inner-box">
                    <img alt="book-cover" src={thumbnail} />
                    <div className="book-info">
                        <h1 className="book-title">{title}</h1>
                        <h3 className="book-author-name">{author + ''}</h3>
                        <h4>
                            {publisher + " ⋆ "}
                            <span>
                                {publishedDate}
                            </span>
                        </h4>
                        <a href={previewLink}>
                            <button className="more-btn">
                                More
                            </button>
                        </a>
                    </div>
                </div>
                {description ? <p className="book-description">{description}</p> : ''}
            </div>
        </div>
    );
}
