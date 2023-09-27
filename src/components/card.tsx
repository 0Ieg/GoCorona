import { FC } from 'react'
import styled from "styled-components";

const CardS = styled.div`
border-radius: 8px;
width: 278px;
height: 278px;
padding: 35px 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
box-shadow: 0 0 12px -6px var(--color-red);
cursor: pointer;
transition: box-shadow 0.1s linear;
background-color: white;
&:hover{
  box-shadow: 0 0 10px -5px var(--color-blue);
}
.text{
  text-align: center;
}
.title {
  font-weight: 700;
  letter-spacing: 0.08rem;
  margin-bottom: 8px;
}
.description {
  max-width: 242px;
  font-size: 12px;
  color: var(--color-gray);
  line-height: 138%;
  text-align: center;
}
`
export const Card:FC<{icon:string, title:string, description:string}> = (props)=>{
  const {icon,title, description} = props
  return(
    <CardS>
      <img src={icon} className="image" />
      <div className="text">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </CardS>
  )
}

