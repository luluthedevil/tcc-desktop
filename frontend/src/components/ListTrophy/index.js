import React from 'react';
import './style.css';
import Trophy from '../Trophy';
import moment from 'moment';

export default function ListTrophy({ list, length, lastbook, test = 'normal' }) {
  let displayLength = 1;
  function getDisplayLength() {
    list.map((item) => {
      if(item.quantity < length){
        displayLength++;
      }
    });
  }
  getDisplayLength();
  function displayDate(bookDate, challengeLength) {
    let testDate = `${bookDate?.slice(8,10)}/${bookDate?.slice(5,7)}/${bookDate?.slice(0,4)}`;
    let parts_of_date = testDate.split("/");
    let output = new Date(+parts_of_date[2], parts_of_date[1] - 1, +parts_of_date[0]);
    const startDate = moment(output);
    const timeEnd = moment(new Date());
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);

    return challengeLength < length ?
    <p>Concluido a: {diffDuration.months()} meses e {diffDuration.days()} dias</p> : null
  }
  return (
    <div className="container-trophies">
        {test === 'normal' ? 
        list.slice(0, displayLength).map((challenge) => (
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
              {displayDate(lastbook?.dateAdded, challenge.quantity)}
            </div>
          </div>
        )) :
        test == 'unread'? 
        <>
        <div className="individual-trophie">
            <h3>Leitor iniciante</h3>
            <p>5 livros em quero ler</p>
            <div>
              <p>
                Livros em quero ler: {length}
              </p>
            </div>
            <div className="trophies">
              <Trophy info={'a'} 
              color={true} />
            </div>
          </div> 
          <div className="individual-trophie">
            <h3>Leitor sonhador</h3>
            <p>50 livros em quero ler</p>
            <div>
              <p>
                Livros em quero ler: {length}
              </p>
            </div>
            <div className="trophies">
              <Trophy info={'a'} 
              color={false} />
            </div>
          </div> 
        </>
        : <div className="individual-trophie">
        <h3>Plenitude</h3>
        <p>0 livros em quero ler</p>
        <div>
          <p>
            Livros em quero ler: {length}
          </p>
        </div>
        <div className="trophies">
          <Trophy info={'a'} 
          color={false} />
        </div>
      </div>   
      }
    </div>
  );
}
