import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';

const FamilyS = styled.div`
height: 100dvh;
display: flex;
align-items: center;
.title{
  font: 700 44px Rubik;
  .blueword{
    color: var(--color-blue);
  }
}
.description{
  max-width: 375px;
  padding: 12px 0 20px;
  font: 400 14px Rubik;
  color: var(--color-gray);
}
.background_red{
  background-color: var(--color-red);
  height: 100%;
  width: 200px;
  border-radius: 20px 0 0 30px;
  position: absolute;
  z-index: 1;
  right: 0;
}
.video{
  background-color: transparent;
  cursor: pointer;
  .name{
    font: 400 15px Rubik;
    color: #B0B0B0;
  }
  .watch{
    font: 400 12px Rubik;
    text-transform: uppercase;
  }

}
`

export const Family:FC = ()=>{
  return (
    <FamilyS>
      <div className="content">
        <div className="title">Take care of yours family’s <span className='blueword'>health.</span></div>
        <div className="description">All in one destination for COVID-19 health queries.<br/> Consult 10,000+ health workers about your concerns.</div>
        <Button path='getstarted' title='get started' color='red'/>
      </div>
      <div className="background_red"></div>
      <button className='video'>
        <svg className='svg' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="21.5" stroke="#4285F4"/>
          <path d="M18.8333 16.5152L28.3333 22L18.8333 27.4848L18.8333 16.5152Z" stroke="#4285F4"/>
        </svg>
        <span className='name'>Stay safe with GoCorona</span>
        <span className='watch'>Watch Video</span>
      </button>
    </FamilyS>
  );
}