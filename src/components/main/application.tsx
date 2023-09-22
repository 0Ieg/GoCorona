import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Information } from '../information';
import googlePlay from '../../bll/images/googlePlay.svg'
import appleStore from '../../bll/images/appStore.svg'

const ApplicationS = styled.section`
height: 100dvh;
.information{
  .title{}
  .description{max-width: 600px;}
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
    <div className="__container">Application</div>
    <div className="information">
      <Information leftTitle='Healthcare' rightTitle=' at your Fingertips.' leftColor='red' descript='Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.'/>
    </div>
    <div className="cards">
      <div className="card">
        <img src="" className="card__image" />
        <div className="card__title"></div>
        <div className="card__description"></div>
      </div>
      <div className="card">
        <img src="" className="card__image" />
        <div className="card__title"></div>
        <div className="card__description"></div>
      </div>

    </div>
    <div className="links">
      <a href="https://play.google.com" target='_blank'>
        <img src={googlePlay}/>
      </a>
      <a href="https://www.apple.com/ru/app-store/" target='_blank'>
        <img src={appleStore}/>
      </a>
    </div>
  </ApplicationS>
)
}