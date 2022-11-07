import React from 'react'
import DetailImgProduct from './DetailImgProducts/DetailImgProduct'
import DetailDescription from './DetailDescription/DetailDescription'
import DetailQuestionAndResponse from './DetailQuestion&&Response/DetailQuestionAndResponse'
import DetailOpinions from './DetailOpinions/DetailOpinions'
export default function Detail({setRenderGalery}) {
  return (
    <div style={{width:"200%"}}>
        <DetailImgProduct setRenderGalery={setRenderGalery}/>
        <DetailDescription/>
        <DetailQuestionAndResponse/>
        <DetailOpinions/>
    </div>
  )
}
