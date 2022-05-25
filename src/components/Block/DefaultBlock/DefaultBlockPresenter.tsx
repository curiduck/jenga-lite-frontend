import { Box, HStack, Text, SkeletonText, Spacer, Image, Avatar, Divider, VStack, Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';
import BookMarkCard from '../../Box/BookMarkCard';
import { DefaultBlockPresenterPropsType } from './DefaultBlockTypes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DefaultBlockPresenter = ({isLoading}:DefaultBlockPresenterPropsType) => (<>
  <Box w={'88%'} h={'auto'} shadow={'lg'} bg={'#F7F5F2'} borderRadius={'18px'} p={'20px 30px 20px 20px'}>
    <HStack>
      <Avatar size={"sm"} /><Text fontSize='xl'>김기덕</Text> 
      <Divider orientation='vertical' size={'10px'}/>
      <Text fontSize='xl'>지구는 둥글다</Text>
    </HStack>
    <Text m={'10px'}fontSize='sm'>내용입니다</Text>

    
  {isLoading ? <HStack>
    <LoadingCards />
    </HStack> : <BookMarks/> }
  </Box>
</>);

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };

const BookMarks = () => (
  <Box pl={'12px'} pr={'5px'}>
    <Slider {...settings}>
      {[...Array(10)].map(() =>
        <>
          <BookMarkCard>
            <VStack >
              <Box h={'150px'}  overflow={'hidden'}>
                <Image w={'100%'} objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
              </Box>
              <Box p='5px' mt={"0.3rem !important"}>
                <Text fontSize={"13px"} pr={"0.3rem"} pl={"0.3rem"}>@Controller를 쓰면 안되는 이유 10가지</Text>
                {/* <span style={{fontSize:'11px', float:'right', paddingRight:'0.4rem', paddingTop:"0.15rem", color:'#878787' }}>2022.05.23</span> */}
                <Text fontSize={'11px'} float={'right'} pr={'0.4rem'} pt={'0.15rem'} color={'#878787'} >2022.05.23</Text>
                </Box>
            </VStack>
          </BookMarkCard>
        </>)
      }
    </Slider>
  </Box>
)


const LoadingCards = () => (
  //ml 6px은 캐루셀 버튼 노출되는 6px만큼 밀었음
    <HStack mt={'15px'} mb={'5px'} ml={'6px'} w={'100%'}>
    {[...Array(3)].map(() => 
    <>
    <Spacer />
    <LoadingCard />
    </>)}
    
    </HStack>)

const LoadingCard = () => {
  return (<BookMarkCard >
    <Skeleton height={'150px'} />
    <SkeletonText noOfLines={3} spacing='2.3' p={"0.5rem"} />
  </BookMarkCard>)
}
export default DefaultBlockPresenter;
//166 222.625 226