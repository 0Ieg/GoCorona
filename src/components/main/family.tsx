import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from '../button';

const FamilyS = styled.div`
.title{
  font: 700 44px Rubik;
  .blueword{
    color: var(--color-blue);
  }
}
.description{
  font: 400 12px Rubik;
  color: var(--color-gray);
}
`

export const Family:FC = ()=>{
  return (
    <FamilyS>
      <div className="title">Take care of yours family’s <span className='blueword'>health.</span></div>
      <div className="description">All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</div>
      <Button path='getstarted' title='get started' color='red'/>

    </FamilyS>
  );
}