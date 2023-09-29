import { FC } from 'react'
import styled from "styled-components";
import { Button } from '../button';
import { Information } from '../information';
import screenshot from '../../bll/images/screenshot.png'
import { SquareS } from '../square';

const mainTitle = 'Stay safe with Go'
const colorTitle = 'Corona.'
const descript = '24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.'

const StaySafeS = styled.section`
height: 100dvh;
.__container{
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  .screenshot{
    justify-self: center;
    position: relative;
    img{
      border-radius: 16px;
      box-shadow: 0 0 16px -5px var(--color-red);
      transition: box-shadow 0.1s linear;
      &:hover{
        box-shadow: 0 0 16px -5px var(--color-blue);
      }
    }
    .square_1{
      width: 147px;
      height: 147px;
      top: -40px;
      left: -40px;
    }
    .square_2{
      width: 77px;
      height: 77px;
      bottom: 130px;
      right: -37px;
    }
    .square_3{
      width: 77px;
      height: 77px;
      bottom: -37px;
      left: -37px;
    }
  }
}
.information{
  justify-self: center;
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
      <div className="screenshot">
        <img src={screenshot} alt="" />
        <SquareS className='square_1'/>
        <SquareS className='square_2'/>
        <SquareS className='square_3'/>
      </div>
      <div className="information">
        <Information leftTitle={mainTitle} rightTitle={colorTitle} rightColor='red' descript={descript}/>
        <Button path='features' color='red' title='features'/>
      </div>
    </div>
  </StaySafeS>
)
}