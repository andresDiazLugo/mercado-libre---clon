import { current } from '@reduxjs/toolkit'
import React from 'react'
import {RiStarSLine,RiStarSFill} from 'react-icons/ri'
import {useSelector} from 'react-redux'
export default function StartsVotation({size}) {
    const review = useSelector(state => state.products.review)
    const media = Math.round(review?.rating_average)
    const arrayRenderStar =[]
    const arrayRenderUnfilled =[]
    let i = 0;
    let j = 0;    

    while(i<media){
        arrayRenderStar.push(i)
        i++
    }

    while(j < (5 - media) ){
        arrayRenderUnfilled.push(j)
        j++
    }
    return (
    <div>
        {arrayRenderStar.map((e,i)=><RiStarSFill key={i} size={size} color="#3483fa"/>)}
        {arrayRenderUnfilled.map((e,i)=><RiStarSLine key={i} size={size} color="#3483fa"/>)}
    </div>
  )
}
