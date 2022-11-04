//  const container = document.querySelector('.containerImg')
// //  const image = document.querySelector('.image')
// //  const result = document.querySelector('.result')
//  console.log(container)
// //  const containerRect = container.getBoundingClientRect()
// //  const imageRect = image.getBoundingClientRect()
// //  const lensRect = lens.getBoundingClientRect()
// //  const resultRect = result.getBoundingClientRect()
// //  console.log(lensRect)
// //  console.log(imageRect)
// //  container.addEventListener('mousemove', zoomImage)
// //  result.style.backgroundImage = `url(${image.src})`
//  const zoomImage=(e)=>{
//      console.log(e)
//      // console.log('zoom image', e.clientX, e.clientY)
//      const {x,y} =getMousePosition(e)
 
 
 
//      lens.style.left = x + "px"
//      lens.style.top = y + "px"
//      let fx = resultRect.width / lensRect.width
//      let fy = resultRect.height / lensRect.height
 
 
//      result.style.backgroundSize = `${imageRect.width * fx}px ${imageRect.height * fy }px`
//      result.style.backgroundPosition = `-${x * fx}px -${y * fy}px` 
//  }
 
 export const  getMousePosition =(e,container,lens,image)=>{
    lens.current.style.display= "block"
    const result = document.querySelector(".portionImgProduct")
    const imageRect = image.current.getBoundingClientRect()
    const resultReact = result.getBoundingClientRect()
    const containerRect = container.current.getBoundingClientRect()
    const lensRect = lens.current.getBoundingClientRect()
    result.style.backgroundImage = `url(${image.current.src})`
    let fx = resultReact.width / lensRect.width
    let fy = resultReact.height / lensRect.height
    console.log(resultReact)
    console.log(lensRect)
    let x = e.clientX - containerRect.left - lensRect.width / 2
    let y = e.clientY - containerRect.top - lensRect.height / 2
    let minX = 0;
    let minY = 0;
    let maxX = containerRect.width - lensRect.width
    let maxY = containerRect.height - lensRect.height

if(x <= minX){
    x= minX
}else if(x >= maxX){
    x=maxX    
}
if(y <= minY){
    y=minY
}else if(y >= maxY){
    y= maxY
}
lens.current.style.left = x + "px"
lens.current.style.top = y + "px"

result.style.backgroundSize = `${imageRect.width * fx}px ${imageRect.height * fy }px`
result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`
}
