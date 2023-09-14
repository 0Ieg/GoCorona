import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';
import logo from '../../bll/images/logo.svg'

const HeaderS = styled.header`
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #d3d4bc;
position: absolute;
z-index: 4;
left: 0;
right: 0;
.logo{
  display: flex;
  align-items: center;
  gap: 5px;
  .image{
    width: 32px;
  }
  .name{
    font: 700 18px Rubik;
    .black_letters{color: var(--color-black);}
    .red_letters{color: var(--color-blue); transition: color 0.1s linear;}
  }
  &:hover .red_letters{
    color: var(--color-red);
  }
}
.menu .menu__list{
  display: flex;
  gap: 40px;
  font: 700 14px Raleway;
  letter-spacing: 2px;
  a{
    padding: 10px;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    transition: all 0.1s linear;
    &.active{
      border-bottom-color: var(--color-blue);
    }
    &:hover{
      color: var(--color-red);
      border-bottom-color: var(--color-red);
    }
  }
}
`
export const Header:FC = ()=>{
  return(
    <HeaderS>
      <NavLink to={'/'} className="logo">
        <img src={logo} className="image"/>
        <div className="name">
          <span className="black_letters">Go</span>
          <span className="red_letters">Corona</span>
        </div>
      </NavLink>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><NavLink to={'home'}>HOME</NavLink></li>
          <li className="menu__item"><NavLink to={'features'}>FEATURES</NavLink></li>
          <li className="menu__item"><NavLink to={'support'}>SUPPORT</NavLink></li>
          <li className="menu__item"><NavLink to={'contact'}>CONTACT US</NavLink></li>
        </ul>
      </nav>
      <Button path='download' title='download' color={'blue'}/>
    </HeaderS>
  )
}