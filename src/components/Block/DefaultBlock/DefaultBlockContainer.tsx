import React, { useEffect, useState } from 'react';
import DefaultBlockPresenter from './DefaultBlockPresenter';

const DefaultBlockContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000);
  }, [])
  return (<>
  <DefaultBlockPresenter isLoading={isLoading}/>
</>);}

export default DefaultBlockContainer;