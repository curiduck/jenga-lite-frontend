import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import backgroundVideoSource from '../../assets/jenga.mp4';
import {
  Avatar, Button, Heading, Stack
} from '@chakra-ui/react'
import SimpleAlert from '../../components/Alert/SimpleAlert';
import { EmailIcon } from '@chakra-ui/icons'
import GoogleIcon from '@mui/icons-material/Google';



const VideoWrapper = styled.div`
  transition-duration: 2s;
  filter: grayscale(40%) blur(6px);
  opacity: 0.8;
`

const LoginFields = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #F7F5F2;
  opacity: 1 };
  border-radius: 10px;
  width: 800px;
  height: 500px;
  top: calc(50vh - 250px);
  left: calc(50vw - 400px);
  
`

const BackgroundVideo = styled.video`
  width: 100vw;
  hegith: 100vh;
  position: relative;
  object-fit: 'fill'
`


const LoginPagePresenter = () => {

  const [isShownAlert, setIsShownAlert] = useState<boolean>(false);

  return (<div style={{ position: 'absolute' }}>
    <LoginFields>
      <br />
      <Stack direction='column' spacing={5} align='center' style={{margin: 30}}>
        <Heading as='h4' size='lg' noOfLines={1}>흥미로운 링크를 모아 블록을 쌓고, 사람들과 나누세요.</Heading>

        <Heading as='h2' size='3xl' noOfLines={3} height={'70px'}>Jenga</Heading>
      </Stack>
      <div style={{ textAlign: 'center' }}>
        <Avatar size='xl' style={{ opacity: 1 }} />

        <Stack direction='column' spacing={5} align='center' style={{ marginTop: 50 }}>
          <Button style={{ width: '80%' }} leftIcon={<GoogleIcon />} colorScheme='yellow' variant='solid'>
            Google로 시작하기
          </Button>
          <Button style={{ width: '80%' }}
            leftIcon={<EmailIcon />}
            colorScheme='pink'
            variant='solid'
            onClick={()=>{
              setIsShownAlert(true);
            }}
          >
            Email로 시작하기
          </Button>
        </Stack>
      </div>
      <SimpleAlert
        isOpen={isShownAlert}
        handleClose={()=>{setIsShownAlert(false)}}
        title={'준비중'}
        content={'현재 준비중인 기능입니다.'} 
        buttons={[]}/>
    </LoginFields>

    <VideoWrapper>
      <BackgroundVideo src={backgroundVideoSource} autoPlay muted loop />
    </VideoWrapper>
  </div>);
}



export default LoginPagePresenter;