 export const desbledLens = (lens)=>{
    lens.current.style.display ="none"
    const result = document.querySelector(".portionImgProduct")
    result.style.backgroundImage= "none"
 }
 
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
