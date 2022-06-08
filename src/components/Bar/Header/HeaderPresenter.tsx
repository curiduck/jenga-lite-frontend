import React from 'react';
import { Box, Center, HStack, Spacer,Text, Avatar, LinkBox} from '@chakra-ui/react'
import { NavigationButtonPropsType } from './HeaderTypes';
import { Link } from 'react-router-dom';

const HeaderPresenter = () => (

  <HStack h={'60px'} w={'100%'}  shadow='md' position='fixed' bgColor={'#8D8DAA'} zIndex={999}>
    <LinkBox>
      <Text p={20} fontSize='2xl' fontWeight={700} color={'#FFFFFF'}>Jenga</Text>
    </LinkBox>
    <Spacer/>
    <HStack pr={20}>
    <NavigationButton label={'블록 피드'} linkUrl={'/block/feed'} />
    <NavigationButton label={'블록 쌓기'} linkUrl={'/block/create'}/>
    <NavigationButton label={'내 블록'} linkUrl={'/block/myblock'}/>
    <NavigationButton label={'내 북마크'} linkUrl={'/bookmark/mybookmark'}/>

    <Avatar size={'sm'}/>
    </HStack>
  </HStack>)



const NavigationButton = React.memo(({label='', onClick=()=>{}, linkUrl="#"}:NavigationButtonPropsType) => (
<Box height='80px' minW={'120px'} w={30} onClick={onClick}>
  <Center w={'100%'} h={'100%'}>
    <Link to={linkUrl}>
      <Text fontSize='md' fontWeight={500} color={'white'} cursor={'pointer'}>{label}</Text>
    </Link>
  </Center>
</Box>));

export default HeaderPresenter;