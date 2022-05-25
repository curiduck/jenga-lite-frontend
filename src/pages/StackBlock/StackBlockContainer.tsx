import React, { useState } from 'react';
import StackBlockPresenter from './StackBlockPresenter';
const StackBlockContainer = () => {
  const [titleInput, setTitleInput] = useState<string>();
  const [descriptionInput, setDescriptionInput] = useState<string>();
  const [hashTagInput, setHashTagInput] = useState<String>();
  const [linkInput, setLinkInput] = useState<String>();
  const [hashTags, setHashTags] = useState<Array<any>>();
  const [links, setLinks] = useState<Array<any>>();

  const onChangeTitleInput = (e: any) => { setTitleInput(e.target.value) };
  const onChangeDescriptionInput = (e: any) => { setDescriptionInput(e.target.value) };
  const onChangeHashTagInput = (e: any) => { setHashTagInput(e.target.value) };



  

  return (<StackBlockPresenter />)
};
export default StackBlockContainer;