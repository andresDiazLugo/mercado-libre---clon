export const convertARS = (n)=>{
    n= String(n)
    let numberConvert="";
    if(n.includes(".")){
        n = String(Math.round(n))  
    }
    if( n.length === 4){
     numberConvert = n.split("").map((e,i)=>{
       if(i===0){
         return e+"."
       }else{
         return e
       }
     }).join("")
     return numberConvert
    }
    if(n.length === 5){
      numberConvert = n.split("").map((e,i)=>{
       if(i===1){
         return e+"."
       }else{
         return e
       }
     }).join("")
     return numberConvert
    }
      if(n.length === 6){
        numberConvert = n.split("").map((e,i)=>{
       if(i===2){
         return e+"."
       }else{
         return e
       }
     }).join("")
     return numberConvert
      }
    if(n.length === 7){
      numberConvert = n.split("").map((e,i)=>{
       if(i===0){
         return e+"."
       }else if(i=== 3){
         return e+"."
       }else{
         return e
       }
     }).join("")
     return numberConvert
    }
    if(n.length === 8){
      numberConvert = n.split("").map((e,i)=>{
       if(i===1){
         return e+"."
       }else if(i=== 4){
         return e+"."
       }else{
         return e
       }
     }).join("")
     return numberConvert
    }
    return n

  }