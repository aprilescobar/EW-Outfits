
document.addEventListener("DOMContentLoaded", function() {
    getTops();

});
    
const getTops = () => {
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderAllTops(tops))

}


const renderAllTops = tops => {
    const topCon= document.getElementById('carouselExampleIndicators')
    const topOl = document.createElement("ol")
    const topDiv = document.createElement("div")
    let num = 0
    topDiv.className = "carousel-inner"
    topOl.className = "carousel-indicators"
    tops.forEach( top => {
        
        let topOlInfo = setCaroLi(num)
        topOl.appendChild(topOlInfo)
        num++
        let renderedTop = renderTopDiv(top)
        topDiv.appendChild(renderedTop)
    })
    topCon.prepend(topDiv)
    const fart = topDiv.getElementsByTagName("div")[0]
    fart.className = "carousel-item active"
    topCon.prepend(topOl)
    const poop = topOl.getElementsByTagName("li")
    poop[0].className = "active"
    console.log(poop)
}

const setCaroLi = (num) => {
    const topCard = document.createElement("li")
    topCard.dataset.target = "#carouselExampleIndicators"
    topCard.dataset.slideTo = num
    return topCard
}

const renderTopDiv = top => {
    const topCard = document.createElement("div")
    topCard.className = "carousel-item"
    topCard.innerHTML = `
                <img class="d-block w-100" src="${top.img_url}" alt="First slide">
    `
    return topCard
}
    // <div class="card-header">${top.name}</div>
 
    // <h5 class="card-title">${top.designer}</h5>