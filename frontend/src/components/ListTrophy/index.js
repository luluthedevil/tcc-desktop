import React from 'react';
import './style.css';
import Trophy from '../Trophy';
import data from '../../data/Challenges';

export default function ListTrophy() {
  return (
    <div className="container-trophies">
        {data.map((challenge) => (
          <div key={challenge.id}>
            <h3>{challenge.title}</h3>
            <div>
              <p>Livros lidos: {challenge.quantidadeLida}</p>
            </div>
            <div className="trophies">
              <Trophy info={challenge.desafios} color={challenge.quantidadeLida} />
            </div>
          </div>
        ))}
    </div>
  );
}
