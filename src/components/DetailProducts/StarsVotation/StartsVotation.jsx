import { current } from '@reduxjs/toolkit'
import React from 'react'
import {RiStarSLine,RiStarSFill} from 'react-icons/ri'
import {useSelector} from 'react-redux'
export default function StartsVotation({size}) {
    const review = useSelector(state => state.products.review)
    const oneStar = review.rating_levels?.one_star
    const twoStar = review.rating_levels?.two_star
    const three = review.rating_levels?.three_star
    const fourStar = review.rating_levels?.four_star
    const fiveStar = review.rating_levels?.five_star
    const arrayStar = [oneStar,twoStar,three,fourStar,fiveStar].filter( e=>e !== 0)
    let starTotal = Math.round((arrayStar.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue
    },0) / arrayStar.length))
    const arrayRenderStar =[]
    const arrayRenderUnfilled =[]
    let i = 0;
    let j = 0;    
    if(starTotal > 5){
        starTotal = 5
    }

    while(i<starTotal){
        arrayRenderStar.push(i)
        i++
    }

    while(j < (5 - starTotal) ){
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
