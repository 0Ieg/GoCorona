import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Information } from '../information';

const ApplicationS = styled.section`
height: 100dvh;
.information{
  .title{}
  .description{max-width: 600px;}
}
`
export const Application:FC = ()=>{
return(
  <ApplicationS>
    <div className="__container">Application</div>
    <div className="information">
      <Information leftTitle='Healthcare' rightTitle=' at your Fingertips.' leftColor='red' descript='Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.'/>
    </div>
  </ApplicationS>
)
}