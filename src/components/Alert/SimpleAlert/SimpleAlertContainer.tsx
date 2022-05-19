import React, { useRef } from 'react';
import {
  Button,
} from '@chakra-ui/react'
import SimpleAlertPresenter from './SimpleAlertPresenter';
import { SimpleAlertContainerPropsType } from './SimpleAlertTypes';



const SimpleAlertContainer = ({isOpen, handleClose, title, content, buttons=[]}:SimpleAlertContainerPropsType) => {
  const focusRef = useRef();


  const footerButtons = [
    <Button onClick={handleClose}>
      Close
    </Button>
  ]
  
  return (<SimpleAlertPresenter 
    isOpen={isOpen} 
    footerButtons={footerButtons} 
    title={title} 
    content={content}
    focusRef={focusRef}/>);
}

export default SimpleAlertContainer;