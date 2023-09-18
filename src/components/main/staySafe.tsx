import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Information } from '../information';

const mainTitle = 'Stay safe with Go'
const colorTitle = 'Corona.'
const descript = '24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.'

const StaySafeS = styled.section`
height: 100dvh;
.information{
  .title{
    max-width: 363px;
  }
  .description{
    max-width: 363px;
  }
}
`
export const StaySafe:FC = ()=>{
return(
  <StaySafeS>
    <div className="__container">
      <div className="screen"></div>
      <div className="information">
        <Information mainTitle={mainTitle} colorTitle={colorTitle} color='red' descript={descript}/>
        <Button path='features' color='red' title='features'/>
      </div>
    </div>
  </StaySafeS>
)
}