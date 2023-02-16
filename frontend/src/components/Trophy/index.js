import React from 'react';
import './style.css';
import { FaTrophy } from 'react-icons/fa';

export default function Trophy({info, color}) {
  return (
    <>
      <div className="trophy">
        < FaTrophy color={color ? "aqua" : "coral" } size={50} />
      </div>
    </>
  );
}
