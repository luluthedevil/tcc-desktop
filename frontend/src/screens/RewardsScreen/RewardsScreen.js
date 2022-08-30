import React from 'react';
import './style.css';
import ListTrophy from '../../components/ListTrophy';

export default function RewardsScreen() {
  return (
    <div className="container-rewards">
      <h3 className="title">Recompensas</h3>
      <ListTrophy />
    </div>
  );
}
