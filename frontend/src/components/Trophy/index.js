import React from 'react';
import './style.css';
import { FaTrophy } from 'react-icons/fa';

export default function Trophy({info, color}) {
  return (
    <>
        {info.map((trophy) => (
          <div className="trophy" key={trophy.id}>
            <p>{trophy.nome}</p>
            < FaTrophy color={color >= trophy.quantidadeMin ? "aqua" : "crimson" } size={50} />
          </div>
        ))}
    </>
  );
}
