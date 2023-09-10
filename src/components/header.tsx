import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { Button } from './button';

const HeaderS = styled.header`
`
export const Header:FC = ()=>{
  return(
    <HeaderS>
      <div className="logo"></div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><NavLink to={'home'}>HOME</NavLink></li>
          <li className="menu__item"><NavLink to={'features'}>FEATURES</NavLink></li>
          <li className="menu__item"><NavLink to={'support'}>SUPPORT</NavLink></li>
          <li className="menu__item"><NavLink to={'contact'}>CONTACT US</NavLink></li>
        </ul>
      </nav>
      <Button path='download' color={'blue'}/>
    </HeaderS>
  )
}