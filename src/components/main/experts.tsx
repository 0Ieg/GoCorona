import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Information } from '../information';
import videoBackground from '../../bll/images/videoBackground.svg'
import videoPlay from '../../bll/images/videoPlay.svg'

const ExpertsS = styled.section`
height: 100dvh;
background-color: var(--color-background);
.statistics{
  width: 654px;
  height: 117px;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  .value{
    color: var(--color-red);
    font: 700 36px Rubik;
  }
  .name{
    color: var(--color-black);
    font: 700 11px Rubik;
  }
}
.video{
  width: 520px;
  height: 284px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 2;
  .video__play{
    position: absolute;
    z-index: 3;
  }
  &:hover circle{
    fill: var(--color-red);
  }
}
.information{
  .title{}
  .description{max-width: 363px;}
}
`
export const Experts:FC = ()=>{
  return (
    <ExpertsS>
      <div className="__container">
        <div className="statistics">
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