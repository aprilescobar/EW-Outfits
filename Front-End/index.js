document.addEventListener("DOMContentLoaded", function() {
    getTops();
    getBottoms();
    getShoes();
});


const getTops = () => {
    const articleCon = document.getElementById("top-inner")
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderItems(tops, articleCon))
}

const getBottoms = () => {
    const articleCon = document.getElementById("bottom-inner")
    fetch("http://localhost:3000/bottoms")
    .then( resp => resp.json())
    .then( bottoms => renderItems(bottoms, articleCon))
}
const getShoes = () => {
    const articleCon = document.getElementById("shoe-inner")
    fetch("http://localhost:3000/shoes")
    .then( resp => resp.json())
    .then( shoes => renderItems(shoes, articleCon))
}

function renderItems(items, articleCon) {
    items.forEach( item => {
        const carouselItem = document.createElement("div")
        carouselItem.className="carousel-item" //first should be active(use if statement)
        carouselItem.innerHTML = `
            <img class="d-block w-100" src=${item.img_url} alt="item_id_${item.id}">
        `
        articleCon.appendChild(carouselItem)
    })
    let activeTop = articleCon.children[0]
    activeTop.className = "carousel-item active"
}


// const renderItems = items => {
//     const topCon= document.getElementById('carouselExampleIndicators')
//     const topOl = document.createElement("ol")
//     const topDiv = document.createElement("div")
//     let num = 0
//     topDiv.className = "carousel-inner"
//     topOl.className = "carousel-indicators"
//     tops.forEach( top => {
        
//         let topOlInfo = setCaroLi(num)
//         topOl.appendChild(topOlInfo)
//         num++
//         let renderedTop = renderTopDiv(top)
//         topDiv.appendChild(renderedTop)
//     })
//     topCon.prepend(topDiv)
//     const fart = topDiv.getElementsByTagName("div")[0]
//     fart.className = "carousel-item active"
//     topCon.prepend(topOl)
//     const poop = topOl.getElementsByTagName("li")
//     poop[0].className = "active"
//     console.log(poop)
// }

// const setCaroLi = (num) => {
//     const topCard = document.createElement("li")
//     topCard.dataset.target = "#carouselExampleIndicators"
//     topCard.dataset.slideTo = num
//     return topCard
// }

// const renderTopDiv = top => {
//     const topCard = document.createElement("div")
//     topCard.className = "carousel-item"
//     topCard.innerHTML = `
//                 <img class="d-block w-100" src="${top.img_url}" alt="First slide">
//     `
//     return topCard
// }



