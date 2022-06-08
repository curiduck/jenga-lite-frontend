import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Bar/Header';
import {DefaultLayoutType} from './Layouts';

const DefaultLayout = ({children, px}:DefaultLayoutType) => (
  <>
  <Header />
  <Box px={!!px ? px : '26%'} w={'100vw'} bg={'#F7F5F2'}  pt={'60px'}>
  <Flex maxW={'800px'} h={'100%'} minH={'100vh'} bg={'#DFDFDE'}>
  {children}
  </Flex>
  </Box>
  </>
)

export default DefaultLayout;