import React, {useState, useEffect} from 'react';
import './style.css';
import ListTrophy from '../../components/ListTrophy';
import axios from 'axios';

export default function RewardsScreen() {
  const [data, setData] = useState([]);
  const baseURL = 'http://localhost:3333/';

  useEffect(() => {
    axios.get(`${baseURL}challenges/`)
    .then(response => {
      setData(response.data);
      console.log(data)
    })
    .catch((err) => console.log(err));
  }, []); 
  return (
    <div className="container-rewards">
      <h2 className="title">Recompensas</h2>
      <ListTrophy
        list={data}
      />
    </div>
  );
}
