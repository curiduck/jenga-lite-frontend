import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import DefaultBlock from '../../components/Block/DefaultBlock';
import { Spacer, Stack, VStack } from '@chakra-ui/react';

const BlockFeedPagePresenter = () => {
  return (
    <DefaultLayout>
      <>
      <VStack w={'100%'} mt={'20px'} spacing={8}>
      {[...Array(10)].map((_, i)=>(<DefaultBlock key={i}/>))}
      </VStack>
      </>
    </DefaultLayout>)
}

export default BlockFeedPagePresenter;