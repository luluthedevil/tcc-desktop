import React from 'react';
import { GrClose } from 'react-icons/gr';
import './style.css';

export default function Modal ({showModal, info, onClose}){
    if(!showModal) {
        return null;
    }
    return(
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close-btn" onClick={() => onClose}>
                    <GrClose />
                </button>
                <div className="inner-box">
                    <img alt="book-cover" src={
                        info.volumeInfo.imageLinks 
                        && 
                        info.volumeInfo.imageLinks.smallThumbnail
                        }  />
                    <div className="book-info">
                        <h1>{info.volumeInfo.title}</h1>
                        <h3 className="book-author-name">{info.volumeInfo.authors + ''}</h3>
                        <h4>
                            {info.volumeInfo.publisher + " ⋆ "}
                            <span>
                                {info.volumeInfo.publishedDate}
                            </span>
                        </h4>
                        <a href={info.volumeInfo.previewLink}>
                            <button className="more-btn">
                                More
                            </button>
                        </a>
                    </div>
                </div>
                <p className="book-description">{info.volumeInfo.description}</p>
            </div>
        </div>
    );
}
