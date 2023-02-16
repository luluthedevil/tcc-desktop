import React from 'react';
import './style.css';
import Trophy from '../Trophy';
import { formatDistance, subDays } from 'date-fns';

export default function ListTrophy({ list, length, books }) {
  let displayLength = 1;
  function getDisplayLength() {
    list.map((item) => {
      if(item.quantity < length){
        displayLength++;
      }
    });
  }
  getDisplayLength();
  function displayDate(book, index, quantity) {
    if(index === quantity) {
      <p>
        Concluido em: 
        {formatDistance(
          subDays(new Date(book.dateAdded)), 
          new Date(), { addSuffix: true })
        }
      </p>
    }
  }
  return (
    <div className="container-trophies">
        {list.slice(0, displayLength).map((challenge) => (
          <div className="individual-trophie" key={challenge.id}>
            <h3>{challenge.name}</h3>
            <div>
              <p>
                Livros lidos: {length}
              </p>
            </div>
            <div className="trophies">
              <Trophy info={challenge.description} 
              color={challenge.quantity < length} />
            </div>
            <div>
              {books.map((book, index) => (
                displayDate(book, index, challenge.quantity)
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
