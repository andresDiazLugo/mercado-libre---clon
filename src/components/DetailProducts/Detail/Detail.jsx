import React from 'react'
import DetailImgProduct from './DetailImgProducts/DetailImgProduct'
import DetailDescription from './DetailDescription/DetailDescription'
import DetailQuestionAndResponse from './DetailQuestion&&Response/DetailQuestionAndResponse'
export default function Detail() {
  return (
    <div style={{width:"200%"}}>
        <DetailImgProduct/>
        <DetailDescription/>
        <DetailQuestionAndResponse/>
    </div>
  )
}
