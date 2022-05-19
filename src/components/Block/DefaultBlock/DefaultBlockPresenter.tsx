import { Box, HStack, Text, SkeletonText, Spacer, Heading, Avatar, Divider } from '@chakra-ui/react';
import React from 'react';
import BookMarkCard from '../../Box/BookMarkCard';
import { DefaultBlockPresenterPropsType } from './DefaultBlockTypes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DefaultBlockPresenter = ({isLoading}:DefaultBlockPresenterPropsType) => (<>
  <Box w={'80%'} h={'300px'} shadow={'lg'} bg={'#F7F5F2'} borderRadius={'18px'} p={'40px'}>
    <HStack>
      <Avatar /><Text fontSize='2xl'>김기덕</Text> 
      <Divider orientation='vertical' size={'10px'}/>
      <Text fontSize='2xl'>지구는 둥글다</Text>
    </HStack>
    
  {isLoading ? <HStack >
    <LoadingCards />
    </HStack> : <BookMarks/> }
  </Box>
</>);

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6
  };
const BookMarks = () => (
<Slider {...settings}>
  {[...Array(10)].map(() => 
  <>
  <BookMarkCard>
  <Heading size={'md'}>나는 자연인이다!!!!</Heading>
  </BookMarkCard>
  </>)
  }
  </Slider>)


const LoadingCards = () => (
  //ml 6px은 캐루셀 버튼 노출되는 6px만큼 밀었음
    <HStack mt={'15px'} ml={'6px'} w={'100%'}>
    {[...Array(6)].map(() => 
    <>
    <Spacer />
    <LoadingCard />
    </>)}
    
    </HStack>)

const LoadingCard = () => {
  return (<BookMarkCard>
    <SkeletonText noOfLines={4} spacing='4' />
  </BookMarkCard>)
}
export default DefaultBlockPresenter;