import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import doctor from '../../bll/images/doctor.svg'
import { Information } from '../information';

const FamilyS = styled.section`
height: 100dvh;
position: relative;
background-color: var(--color-background);
&::before{
  content: '';
  background-color: var(--color-red);
  border-radius: 20px 0 0 30px;
  position: absolute;
  z-index: 1;
  top: 100px;
  bottom: 0;
  right: 0;
  left: 68%;
}
.doctor{
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 68%;
  z-index: 2;
}
.__container{
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
}
.information{
  .title{
    max-width: 417px;
  }
  .description{
    max-width: 370px;
  }
}
.video{
  background-color: transparent;
  cursor: pointer;
  display: grid;
  grid-template-columns: 44px 180px;
  grid-template-areas: 'svg name' 'svg watch';
  justify-items: start;
  grid-gap: 12px;
  position: absolute;
  bottom: 47px;
  .svg{
    grid-area: svg;
    path{
      fill: var(--color-red);
      fill-opacity: 0;
    }
    &>*{
      transition: all 0.1s linear;
    }
  }
  .name{
    grid-area: name;
    font: 400 15px Rubik;
    color: #B0B0B0;
  }
  .watch{
    grid-area: watch;
    font: 400 12px Rubik;
    text-transform: uppercase;
  }
  &:hover svg{
    circle{
      stroke: var(--color-red);
    }
    path{
      stroke: var(--color-red);
      fill: var(--color-red);
      fill-opacity: 1;
    }
  }
}
`

export const Family: FC = () => {
  return (
    <FamilyS>
      <img src={doctor} className="doctor" />
      <div className="__container">
        <div className="information">
          <Information mainTitle='Take care of yours family’s ' colorTitle='health.' color='blue' descript='All in one destination for COVID-19 health queries. Consult 10,000+ health workers about your concerns.'/>
          <Button path='getstarted' title='get started' color='red' />
        </div>
        <button className='video'>
          <svg className='svg' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.5" stroke="#4285F4" />
            <path d="M18.8333 16.5152L28.3333 22L18.8333 27.4848L18.8333 16.5152Z" stroke="#4285F4"/>
          </svg>
          <span className='name'>Stay safe with GoCorona</span>
          <span className='watch'>Watch Video</span>
        </button>
      </div>
    </FamilyS>
  );
}