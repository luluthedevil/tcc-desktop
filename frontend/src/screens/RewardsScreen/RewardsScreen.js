import React, {useState, useEffect} from 'react';
import './style.css';
import ListTrophy from '../../components/ListTrophy';
import axios from 'axios';

export default function RewardsScreen() {
  const [data, setData] = useState([]);
  const [readLength, setReadLength] = useState([]);
  const baseURL = 'http://localhost:3333/';

  useEffect(() => {
    axios.get(`${baseURL}challenges/`)
    .then(response => {
      setData(response.data);
    })
    .catch((err) => console.log(err));
    axios.get(`${baseURL}books/count`)
    .then(response => {
      setReadLength(response.data);
    })
    .catch((err) => console.log(err));
  }, []); 
  return (
    <div className="container-rewards">
      <h2 className="title">Recompensas</h2>
      <ListTrophy
        list={data}
        length={readLength.length}
        lastbook={readLength[readLength.length-1]}
      />
      <p className="last-time-added">
        Último livro adicionado em:
        {` ${readLength[readLength.length-1]?.dateAdded?.slice(8,10)}/${readLength[readLength.length-1]?.dateAdded?.slice(5,7)}/${readLength[readLength.length-1]?.dateAdded?.slice(0,4)}`}
      </p>
    </div>
  );
}
