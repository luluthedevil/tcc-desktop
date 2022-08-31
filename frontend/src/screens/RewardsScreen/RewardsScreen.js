import React from 'react';
import './style.css';
import ListTrophy from '../../components/ListTrophy';

export default function RewardsScreen() {
  return (
    <div className="container-rewards">
      <h2 className="title">Recompensas</h2>
      <ListTrophy />
    </div>
  );
}
