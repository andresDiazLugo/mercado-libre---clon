export const changeTitleNameDom = (name)=>{
    const title = document.querySelector("#title")
    title.innerHTML = `${name} | Mercado Libre`
}