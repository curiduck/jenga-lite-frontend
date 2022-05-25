import React from 'react';
import BookMarkCard from '../../components/Box/BookMarkCard';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Image, Box, Button, Heading, HStack, Input, SimpleGrid, Tag, TagCloseButton, TagLabel, Text, Textarea, VStack } from '@chakra-ui/react';
import DefaultLayout from '../../layouts/DefaultLayout';
const StackBlockPresenter = () => (<>
  <DefaultLayout px={'20%'}>

    <VStack w={'90%'} minH={'90vh'} borderRadius={'15px'} bgColor={'#F8F7F5'} align='left' m={20} p={10}>

      <MarginBox>
        <NonSelectable>
          <Text mb={'10px'}>제목</Text>
        </NonSelectable>
        <Input placeholder='제목을 입력하세요..' bgColor={'#F7F5F2'} autoFocus={true} />

      </MarginBox>
      <MarginBox>
        <NonSelectable><Text mb={'10px'}>설명</Text></NonSelectable>
        <Textarea resize={'none'} placeholder='블록에 대한 간략한 설명을 작성하세요..' bgColor={'#F7F5F2'} />
      </MarginBox>

      <MarginBox>
        <NonSelectable><Text mb={'10px'}>해시태그</Text></NonSelectable>
        <HStack>
        <Input placeholder='해시태그를 입력하세요' bgColor={'#F7F5F2'} />
        <Button w={'200px'} bgColor={'#F56D91'} color={'#FFFFFF'}>추가하기</Button>
        </HStack>
        <HStack mt={'20px'}>
          <NonSelectable>
          <CloseableTag color={'red'} key={'coding'} label={'#코딩'} onClickClose={()=>{alert('소리쳐 야호')}}/>
          </NonSelectable>
          <NonSelectable>
          <CloseableTag color={'blue'} key={'game'} label={'#게임'} onClickClose={()=>{alert('소리쳐 야호2')}}/>
          </NonSelectable>
        </HStack>
      </MarginBox>


      <MarginBox>
        <NonSelectable><Text mb={'10px'}>링크 등록</Text></NonSelectable>
        <HStack>
          <Input placeholder='https://' />
          <Button w={'200px'} bgColor={'#F56D91'} color={'#FFFFFF'}>추가하기</Button>
        </HStack>
        <SimpleGrid columns={3} spacing={5} mt={10}>
          {[...Array(20)].map(()=><BookMarkCard boxProps={{margin: 0, cursor: 'default'}}>
          <RemoveCircleOutlineIcon style={{position: 'absolute', margin: '-20px', cursor: 'pointer', fontSize: '25px'}} />
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
          </BookMarkCard>)}
        </SimpleGrid>
      </MarginBox>

    
    </VStack>


  </DefaultLayout>
</>);

type CloseableTagProps = {
  key:string; 
  color:string; 
  label:string;
  onClickClose?: (e:React.SyntheticEvent) => void;
}

const MarginBox = React.memo(({ children }: any) => (<Box p={'10px'}>{children}</Box>));
const NonSelectable = React.memo(({ children, ...props }: any) => (<>{React.cloneElement(children, {...props, userSelect: 'none'})}</>))
const CloseableTag = React.memo(({key, color, label, onClickClose}:CloseableTagProps)=> (
  <Tag
  size={'md'}
  key={key}
  borderRadius='full'
  variant='solid'
  colorScheme={color}
>
  <TagLabel>{label}</TagLabel>
  <TagCloseButton onClick={onClickClose}/>
</Tag>
))
export default StackBlockPresenter;