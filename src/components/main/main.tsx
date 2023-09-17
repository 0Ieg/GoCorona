import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Family } from './family';
import { StaySafe } from './staySafe';
import { Experts } from './experts';
import { Application } from './application';

const MainS = styled.main`
  
`

export const Main:FC = ()=>{
  return (
    <MainS>
      <Family/>
      <StaySafe/>
      <Experts/>
      <Application/>
    </MainS>
  );
}