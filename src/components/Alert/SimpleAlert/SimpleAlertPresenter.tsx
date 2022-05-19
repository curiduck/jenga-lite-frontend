import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { SimpleAlertPresenterPropsType } from './SimpleAlertTypes';

const SimpleAlertPresenter = ({
  isOpen,
  title,
  content,
  focusRef,
  footerButtons }:SimpleAlertPresenterPropsType) => {

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={focusRef}
        onClose={()=>{}}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
              {content}
            </AlertDialogBody>

            <AlertDialogFooter>
              {footerButtons}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default SimpleAlertPresenter;