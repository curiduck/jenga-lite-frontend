import React from 'react';
import { Box } from '@chakra-ui/react';
import { BookMarkCardType } from './BookMarkCardTypes';
const BookMarkCardPresenter = ({ children, boxProps }: BookMarkCardType) => (
  <Box w={'195px'} h={'230px'} 
    m={'12px 0 12px 0'}
    cursor='pointer'
    // padding='4'
    overflow={'hidden'}
    boxShadow='md' bg='white'
    // pl={'2'} pr={'2'}
    borderRadius={'15px'} borderWidth={'2px'}
    {...boxProps}
    >
    {children}
  </Box>);
export default BookMarkCardPresenter;