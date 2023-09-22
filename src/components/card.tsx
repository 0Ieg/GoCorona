import { FC } from 'react'
import styled from "styled-components";

const CardS = styled.div`
background-color: #fff;
border-radius: 8px;
.image {
}
.title {
}
.description {
}
`
export const Card:FC = (props)=>{
  return(
    <CardS>
      <img src="" className="image" />
      <div className="title"></div>
      <div className="description"></div>
    </CardS>
  )
}

