import React from 'react';
import BookMarkCardPresenter from './BookMarkCardPresenter';
import { BookMarkCardType } from './BookMarkCardTypes';

const BookMarkCardContainer = (props:BookMarkCardType) => {
  return (<BookMarkCardPresenter {...props}/>)
};

  export default BookMarkCardContainer;