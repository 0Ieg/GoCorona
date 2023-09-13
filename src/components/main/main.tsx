import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Family } from './family';

const MainS = styled.div`
  
`

export const Main:FC = ()=>{
  return (
    <MainS>
      <Family/>
    </MainS>
  );
}