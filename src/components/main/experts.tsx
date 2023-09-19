import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import { Information } from '../information';

const ExpertsS = styled.section`
height: 100dvh;
background-color: var(--color-background);
.information{
  .title{}
  .description{max-width: 363px;}
}
`
export const Experts:FC = ()=>{
return(
  <ExpertsS>
    <div className="__container">Experts</div>
    <div className="statistics"></div>
    <div className="video"></div>
    <div className="information">
      <Information leftTitle='Talk to' rightTitle='experts.' rightColor='blue' descript='Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.'/>
      <Button title='Features' path='Features' color='blue'/>
    </div>
  </ExpertsS>
)
}