import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const ButtonS = styled.button`
height: max-content;
text-transform: uppercase;
border-radius: 5px;
transition: background-color 0.1s linear;
&.color_blue{
  background-color: var(--color-blue);
  &:hover{
    background-color: var(--color-red);
  }
}
&.color_red{
  background-color: var(--color-red);
  &:hover{
    background-color: var(--color-blue);
  }
}
a{
  display: block;
  font: 800 12px Raleway;
  padding: 12px 30px;
  color: var(--color-white);
}
`
export const Button:FC<{path:string, title:string, color:'red'|'blue'}> = (props)=>{
  const {path, title, color} = props
  return(
    <ButtonS className={color=='blue'?'color_blue':'color_red'}>
      <NavLink to={path.toLowerCase()}>{title}</NavLink>
    </ButtonS>
  )
}