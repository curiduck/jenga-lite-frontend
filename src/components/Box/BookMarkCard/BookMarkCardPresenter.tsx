import React from 'react';
import { Box } from '@chakra-ui/react';
import { BookMarkCardType } from './BookMarkCardTypes';
const BookMarkCardPresenter = ({children}:BookMarkCardType) => (
<Box w={'150px'} h={'150px'}
cursor='pointer'
m={'15px'}
padding='6' boxShadow='lg' bg='white'
borderRadius={'25px'} borderWidth={'2px'}>
  {children}
</Box>);
export default BookMarkCardPresenter;