import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const ButtonS = styled.button`
height: max-content;
text-transform: uppercase;
border-radius: 5px;
transition: background-color 0.3s linear;
&.color_blue{
  background-color: var(--color-blue);
}
&.color_red{
  background-color: var(--color-red);
}
a{
  display: block;
  font: 800 16px Raleway;
  padding: 12px 30px;
  color: var(--color-white);
}
&:hover{
  background-color: var(--color-red);
}
`
export const Button:FC<{path:string, color:string}> = (props)=>{
  const {path, color} = props
  return(
    <ButtonS className={color=='blue'?'color_blue':'color_red'}>
      <NavLink to={path}>{path}</NavLink>
    </ButtonS>
  )
}