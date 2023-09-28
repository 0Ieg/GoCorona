import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Information } from '../information';
import videoBackground from '../../bll/images/videoBackground.svg'
import videoPlay from '../../bll/images/videoPlay.svg'
import { SquareS } from '../square';

const ExpertsS = styled.section`
height: 100dvh;
padding: 50px 0 105px;
background-color: var(--color-background);
.__container{
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 200px 1fr;
  grid-template-areas: 'statistics statistics' 'information video';
  grid-row-gap: 30px;
}
.statistics{
  grid-area: statistics;
  align-self: center;
  justify-self: center;
  position: relative;
  z-index: 2;
  .statistics__inner{
    cursor: pointer;
    width: 654px;
    height: 117px;
    border-radius: 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 16px -5px var(--color-blue);
    transition: box-shadow 0.1s linear;
    .square_1{
      width: 65px;
      height: 65px;
      left: -20px; 
      bottom: -20px;
      transform: rotate(-30deg);
    }
    .square_2{
      width: 96px;
      height: 96px;
      top: -35px; 
      left: 30%;
      transform: rotate(15deg);
    }
    .square_3{
      width: 127px;
      height: 127px;
      top: -2px; 
      right: -50px;
      transform: rotate(-30deg);
    }
    .value{
      color: var(--color-red);
      font: 700 36px Rubik;
      text-align: center;
    }
    .name{
      color: var(--color-black);
      font: 700 11px Rubik;
      text-align: center;
    }
    &:hover{
      box-shadow: 0 0 16px -5px var(--color-red);
    }
  }
}
.video{
  width: 520px;
  height: 284px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 16px -5px var(--color-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 2;
  grid-area: video;
  align-self: center;
  transition: box-shadow 0.1s linear;
  .video__play{
    position: absolute;
    z-index: 3;
  }
  &:hover{
    box-shadow: 0 0 16px -5px var(--color-red);
  }
}
.information{
  grid-area: information;
  align-self: center;
  .title{}
  .description{max-width: 363px;}
}
`
export const Experts:FC = ()=>{
  return (
    <ExpertsS>
      <div className="__container">
        <div className="statistics">
          <div className="statistics__inner">
            <div className="users">
              <div className="value">2m</div>
              <div className="name">Users</div>
            </div>
            <div className="countries">
              <div className="value">78</div>
              <div className="name">Countries</div>
            </div>
            <div className="experts">
              <div className="value">10,000+</div>
              <div className="name">Medical experts</div>
            </div>
            <SquareS className='square_1'/>
            <SquareS className='square_2'/>
            <SquareS className='square_3'/>
          </div>
        </div>
        <div className="video">
          <img src={videoBackground} />
          <img className='video__play' src={videoPlay} />
        </div>
        <div className="information">
          <Information leftTitle='Talk to' rightTitle='experts.' rightColor='blue' descript='Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.' />
          <Button title='Features' path='Features' color='blue' />
        </div>
      </div>
    </ExpertsS>
  )
}