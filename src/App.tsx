import { FC } from 'react';
import './App.css'
import styled from "styled-components";
import { Header } from './components/header';

const AppS = styled.div`
  
`

export const App:FC = ()=>{
  return (
    <AppS className='app__container'>
      <Header/>
    </AppS>
  );
}

