import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import './style.css';
import semCapa from '../../../imgs/capa_para_sem_capa.png';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function Modal ({showModal, info, onClose, thumbnail}){
    const [isSaved, setIsSaved] = useState(false);
    const baseURL = 'http://localhost:3333/';
    async function postMongo() {
        axios.post(`${baseURL}books`, {
            "image": info.imageLinks ? info.imageLinks.smallThumbnail : semCapa,
            "title": info.title,
            "author": JSON.stringify(info.authors),
            "publisher": info.publisher,
            "publishedDate": info.publishedDate,
            "previewLink": info.previewLink,
            "description": info.description
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    if(!showModal) {
        return null;
    }
    return(
        <div className="overlay">
            <div className="overlay-inner">
                <div className="modal-buttons">
                    <div>
                        <button id="save-book" type="submit" className="save-btn" onClick={() => {setIsSaved(!isSaved); postMongo();}}>
                            {isSaved ? 
                            <BsBookmarkFill />
                            : 
                            <BsBookmark />}
                        </button>
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
                        <h1 className="book-title">{info.title}</h1>
                        <h3 className="book-author-name">{info.authors + ''}</h3>
                        <h4>
                            {info.publisher + " ⋆ "}
                            <span>
                                {info.publishedDate}
                            </span>
                        </h4>
                        <a href={info.previewLink}>
                            <button className="more-btn">
                                More
                            </button>
                        </a>
                    </div>
                </div>
                {info.description ? <p className="book-description">{info.description}</p> : ''}
            </div>
        </div>
    );
}
