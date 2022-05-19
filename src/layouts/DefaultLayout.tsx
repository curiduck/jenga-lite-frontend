import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Bar/Header';
import {DefaultLayoutType} from './Layouts';

const DefaultLayout = ({children}:DefaultLayoutType) => (
  <>
  <Header />
  <Box px={'20%'} w={'100vw'} bg={'#F7F5F2'} >
  <Flex maxW={'1300px'} h={'100%'} minH={'100vh'} bg={'#DFDFDE'}>
  {children}
  </Flex>
  </Box>
  </>
)

export default DefaultLayout;