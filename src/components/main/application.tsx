import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Information } from '../information';
import googlePlay from '../../bll/images/googlePlay.svg'
import appleStore from '../../bll/images/appStore.svg'
import { Card } from '../card';
import card1 from '../../bll/images/Card1.svg'
import card2 from '../../bll/images/Card2.svg'
import card3 from '../../bll/images/Card3.svg'

const ApplicationS = styled.section`
height: 100dvh;
.information{
  .title{}
  .description{max-width: 600px;}
}
.cards{
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.links{
  display: flex;
  gap: 45px;
  justify-content: center;
  align-items: center;
}
`
export const Application:FC = ()=>{
return(
  <ApplicationS>
    <div className="__container">
      <div className="information">
        <Information leftTitle='Healthcare' rightTitle=' at your Fingertips.' leftColor='red' descript='Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.'/>
      </div>
      <div className="cards">
        <Card icon={card1} title='Symptom Checker' description='Check if you are infected by COVID-19 with our Symptom Checker'/>
        <Card icon={card2} title='24x7 Medical support' description='Consult with 10,000+ health workers about your concerns.'/>
        <Card icon={card3} title='Conditions' description='Bringing premium healthcare features to your fingertips.'/>
      </div>
      <div className="links">
        <a href="https://play.google.com" target='_blank'>
          <img src={googlePlay}/>
        </a>
        <a href="https://www.apple.com/ru/app-store/" target='_blank'>
          <img src={appleStore}/>
        </a>
      </div>
    </div>
  </ApplicationS>
)
}
