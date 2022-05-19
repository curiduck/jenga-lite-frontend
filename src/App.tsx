import React from 'react';
import Login from './pages/Login';
import BlockFeed from './pages/BlockFeed';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login"  element={<Login />}></Route>
        <Route path="/block/feed"  element={<BlockFeed />}></Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider >
  );
}

export default App;
