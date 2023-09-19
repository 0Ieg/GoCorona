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

export const Information:FC<{leftTitle:string, rightTitle:string, leftColor?:'red'|'blue', rightColor?:'red'|'blue', descript:string}> = (props) => {
  const {leftTitle, rightTitle, leftColor, rightColor, descript} = props
  return (
    <InformationS>
      <div className="title">
        <span className={leftColor?leftColor==='red'?'leftTitle redword':'leftTitle blueword':'leftTitle'}>{leftTitle}</span><span className={rightColor?rightColor==='red'?'rightTitle redword':'rightTitle blueword':'rightTitle'}>{rightTitle}</span>
      </div>
      <div className="description">{descript}</div>
    </InformationS>
  )
}