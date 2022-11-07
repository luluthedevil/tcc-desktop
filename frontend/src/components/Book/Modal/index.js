import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import './style.css';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function Modal ({showModal, info, onClose}){
    const [isSaved, setIsSaved] = useState(false);
    const volumeInfo = info.volumeInfo;
    const accessInfo = info.accessInfo;
    const selfLink = info.selfLink;
    const data = {
        volumeInfo,
        accessInfo,
        selfLink
    }
    
    function handleSave() {
        //console.log(data)
        //console.log(process.env.GOOGLE_SHEETS_LINK)
        axios.post(`https://sheet.best/api/sheets/${process.env.REACT_APP_GOOGLE_SHEET_LINK}`, data).then((response) => {
            console.log(response.status)
        })
    }
    if(!showModal) {
        return null;
    }
    return(
        <div className="overlay">
            <div className="overlay-inner">
                <div className="modal-buttons">
                    <div>
                        <button type="submit" className="save-btn" onClick={() => {setIsSaved(!isSaved); handleSave();}}>
                            {isSaved ? 
                            <BsBookmarkFill />
                            : 
                            <BsBookmark />}
                        </button>
                    </div>
                    <div>
                        <button className="close-btn" onClick={() => onClose}>
                            <GrClose />
                        </button>
                    </div>
                </div>
                <div className="inner-box">
                    <img alt="book-cover" src={
                        info.volumeInfo.imageLinks 
                        && 
                        info.volumeInfo.imageLinks.smallThumbnail
                        }  />
                    <div className="book-info">
                        <h1 className="book-title">{info.volumeInfo.title}</h1>
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
                {info.volumeInfo.description ? <p className="book-description">{info.volumeInfo.description}</p> : ''}
            </div>
        </div>
    );
}
