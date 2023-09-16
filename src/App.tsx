import { FC } from 'react';
import './App.css'
import styled from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

const AppS = styled.div`
  
`

export const App:FC = ()=>{
  return (
    <Router>
      <AppS>
        <Header/>
        <Main/>
      </AppS>
    </Router>
  );
}

