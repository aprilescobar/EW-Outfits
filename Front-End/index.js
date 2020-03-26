let addOutfit = true;
let addThing = false;

window.onload = function() {
    document.getElementById('everythangCreate').style.display = 'none';
  };

document.addEventListener("DOMContentLoaded", function() {
    let createBtn = document.getElementById("create-btn")
    const createForm = document.getElementById("everythangCreate")
    const thing = document.getElementById("something")
    
    getTops();
    getBottoms();
    getShoes();

    selectTop();
    selectBottoms();
    selectShoes();

    createOutfit();
    getBestOutfits();
    buttons();
        
    createBtn.addEventListener("click", () => {
        addOutfit = !addOutfit;
        addThing = !addThing;
        if (addOutfit) {
            createForm.style.display = "none";
            thing.style.display = "block";
        } else {
            createForm.style.display = "block";
            thing.style.display = "none";
        }
    })
});


const getTops = () => {
    const articleCon = document.getElementById("top-inner")
    const articleIndic = document.getElementById("top-indicators")
    const article = "top"
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderItems(tops, articleCon, articleIndic, article))
}

const getBottoms = () => {
    const articleCon = document.getElementById("bottom-inner")
    const articleIndic = document.getElementById("bottom-indicators")
    const article = "bottom"
    fetch("http://localhost:3000/bottoms")
    .then( resp => resp.json())
    .then( bottoms => renderItems(bottoms, articleCon, articleIndic, article))
}
const getShoes = () => {
    const articleCon = document.getElementById("shoe-inner")
    const articleIndic = document.getElementById("shoe-indicators")
    const article = "shoe"
    fetch("http://localhost:3000/shoes")
    .then( resp => resp.json())
    .then( shoes => renderItems(shoes, articleCon, articleIndic, article))
}

function renderItems(items, articleCon, articleIndic, article) {
    let num = 0
    items.forEach( item => {
        const indicLineItem = document.createElement("li")
        indicLineItem.innerHTML = `
            <li data-target="#${article}CarouselIndicators" data-slide-to="${num}"></li>
        `
        num++
        articleIndic.appendChild(indicLineItem)

        const carouselItem = document.createElement("div")
        carouselItem.className="carousel-item" //first should be active(use if statement)
        carouselItem.dataset.id = `${article} ${item.id}`
        carouselItem.innerHTML = `
            <img class="d-block w-100" src=${item.img_url} alt="item_id_${item.id}">
        `
        articleCon.appendChild(carouselItem)
    })
    let activeTop = articleCon.children[0]
    activeTop.className = "carousel-item active"

    let activeTopIndicator = articleIndic.children[0]
    activeTopIndicator.className = "active"
}

const selectTop = () => {
    const topOptions = document.getElementById("top-inner")
    const currentTop = document.getElementById("top-user-input")
    topOptions.addEventListener("click", e => {
        currentTop.src = e.target.src
        currentTop.dataset.id = e.target.parentNode.dataset.id
        return currentTop
    })
}

const selectBottoms = () => {
    const bottomOptions = document.getElementById("bottom-inner")
    const currentBottom = document.getElementById("bottom-user-input")
    bottomOptions.addEventListener("click", e => {
        currentBottom.src = e.target.src
        currentBottom.dataset.id = e.target.parentNode.dataset.id
        return currentBottom
    })
}

const selectShoes = () => {
    const shoeOptions = document.getElementById("shoe-inner")
    const currentShoe = document.getElementById("shoe-user-input")
    shoeOptions.addEventListener("click", e => {
        currentShoe.src = e.target.src
        currentShoe.dataset.id = e.target.parentNode.dataset.id
        return currentShoe
    })
}

const createOutfit = () => {
    const form = document.getElementById("outfit-form")
    form.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.id === "booty") {
             console.log("hello")
        let nameVal = document.getElementById("outfit-name-input").value
        let topObjVal = document.getElementById("top-user-input").dataset.id.split(" ")[1]
        let bottomObjVal = document.getElementById("bottom-user-input").dataset.id.split(" ")[1]
        let shoeObjVal = document.getElementById("shoe-user-input").dataset.id.split(" ")[1]
        let seasonObjVal = document.getElementById("season-select").value
            fetch("http://localhost:3000/outfits", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json" 
                },
                body: JSON.stringify({
                    name: nameVal,
                    season: seasonObjVal, 
                    likes: 0,
                    top_id: topObjVal, 
                    bottom_id: bottomObjVal, 
                    shoe_id: shoeObjVal
                })
            })
        .then(resp => resp.json())
        .then( alert(" Dope Fit. Time to see if you're top 3 😎"))
        form.reset()
        location.reload();
        return false;

        // hide button references
        // document.getElementById('everythangCreate').style.display = 'none';
        // document.getElementById("something").style.display = 'block';
        // addOutfit = !addOutfit;
        // addThing = !addThing;

        }
    })
}

const getBestOutfits = () =>{
    fetch("http://localhost:3000/outfits")
    .then(resp => resp.json())
    .then(outfits => renderBestOutfits(outfits)) 
}

const renderBestOutfits = outfits => {
    const numOne = outfits[0];
    const numTwo = outfits[1];
    const numThree = outfits[2]

    renderOutfit(numOne, 1)
    renderOutfit(numTwo, 2)
    renderOutfit(numThree, 3)
}

const renderOutfit = (outfit, num) =>{
    let nameEl = document.getElementById(`outfit-${num}-name`)
    nameEl.innerText = outfit.name
    
    let topEl = document.getElementById(`top-${num}-user-input`)
    let topImg = document.querySelector(`[data-id="top ${outfit.top_id}"]`).querySelector('img').src
    topEl.src = topImg

    let bottomEl = document.getElementById(`bottom-${num}-user-input`)
    let bottomImg = document.querySelector(`[data-id="bottom ${outfit.bottom_id}"]`).querySelector('img').src
    bottomEl.src = bottomImg

    let shoeEl = document.getElementById(`shoe-${num}-user-input`)
    let shoeImg = document.querySelector(`[data-id="shoe ${outfit.shoe_id}"]`).querySelector('img').src
    shoeEl.src = shoeImg

    let likeEl = document.getElementById(`like-outfit-${num}`)
    likeEl.innerText = `❤️ ${outfit.likes}`
    likeEl.dataset.id = outfit.id

    let cmtEl = document.getElementById(`cmt-outfit-${num}`)
    cmtEl.dataset.id = outfit.id
}

const buttons = () => {
    const outfitCardCollection = document.getElementById("user-outfits-collection")
    outfitCardCollection.addEventListener("click", function(e) {
        if (e.target.className === "like"){
            incrementLike(e.target)
        }
        if (e.target.className === "cmt") {
            console.log(e.target)
        }

    })
}

const incrementLike = (likeButton) => {
    let num = likeButton.innerText.split(" ")[1]
    likeButton.innerText = `❤️ ${++num}`
    fetch(`http://localhost:3000/outfits/${likeButton.dataset.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({ likes: num })
    })
}













// const renderOutfit = outfit => {
//     const div1 = document.getElementById('justWork')
//     div1.className = "rows"

//     const div2 = document.createElement('div')
//     div2.className = "card"

//     const h4 = document.createElement('h4')
//     h4.id = outfit.id
//     h4.innerText = outfit.name

//     const div3 = document.createElement('div')
//     div3.className = "row"

//     const div4 = document.createElement('div')
//     div4.className = "card"
    

//     div2.innerHTML = `
//     outfit season = ${outfit.season}
//     outfit likes = ${outfit.likes}
//     outfit top_id = ${outfit.top_id}
//     outfit bottom_id = ${outfit.bottom_id}
//     outfit shoe_id = ${outfit.name}
//     topscore = ${outfit.top_id}
//     `


//     div2.appendChild(h4)
//     div1.appendChild(div2)


// }




    // Super Checklist
    // Outfits section: increment like button 
    // (fetch "update") for likes button
    // 
    // √ score logic on backend model
    // √ leaderboard logic on backend model
    // √ allow js to access logic through controller
    // √ render leaderboard on the dom
    // hide and seek on the all outfits
    // 
    // implement comments feature
    // full CRUD on comments
    // hide and seek on comments
    
    // 🌎


