import { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ApplicationS = styled.section`
height: 100dvh;
`
export const Application:FC = ()=>{
return(
  <ApplicationS>
    <div className="__container">Application</div>
  </ApplicationS>
)
}