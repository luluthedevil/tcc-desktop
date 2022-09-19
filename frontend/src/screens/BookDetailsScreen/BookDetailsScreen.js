import React from 'react';
import BookDetails from '../../components/Book/Details';
import {useLocation} from 'react-router-dom';

export default function BookDetailsScreen() {
  const location = useLocation();
  const book = location.state.book;
  return (
    <div>
      <BookDetails book={book} details={true} />
    </div>
  );
}
