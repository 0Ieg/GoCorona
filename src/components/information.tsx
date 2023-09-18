import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const InformationS = styled.section`
.title{
  font: 700 44px Rubik;
  .blueword{
    color: var(--color-blue);
  }
  .redword{
    color: var(--color-red);
  }
}
.description{
  padding: 12px 0 20px;
  font: 400 14px Rubik;
  color: var(--color-gray);
}
`

export const Information:FC<{mainTitle:string, colorTitle:string, color:'red'|'blue', descript:string}> = (props) => {
  const {mainTitle, colorTitle, color, descript} = props
  return (
    <InformationS>
      <div className="title">{mainTitle}<span className={color==='red'?'redword':'blueword'}>{colorTitle}</span></div>
      <div className="description">{descript}</div>
    </InformationS>
  )
}