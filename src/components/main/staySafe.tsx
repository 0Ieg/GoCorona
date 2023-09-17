import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';

const StaySafeS = styled.section`
height: 100dvh;
`
export const StaySafe:FC = ()=>{
return(
  <StaySafeS>
    <div className="__container">StaySafe</div>
  </StaySafeS>
)
}