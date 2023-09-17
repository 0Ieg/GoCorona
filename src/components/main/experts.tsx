import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';

const ExpertsS = styled.section`
height: 100dvh;
background-color: var(--color-background);
`
export const Experts:FC = ()=>{
return(
  <ExpertsS>
    <div className="__container">Experts</div>
  </ExpertsS>
)
}