let addOutfit = true;
let addThing = false;
let cmtHideShow1 = false;
let cmtHideShow2 = false;
let cmtHideShow3 = false;

window.onload = function() {
    document.getElementById('everythangCreate').style.display = 'none';
    document.getElementById("outfit-1-comments").style.display = 'none';
    document.getElementById("outfit-2-comments").style.display = 'none';
    document.getElementById("outfit-3-comments").style.display = 'none';
  };

document.addEventListener("DOMContentLoaded", function() {
    let createBtn = document.getElementById("create-btn")
    const createForm = document.getElementById("everythangCreate")
    const thing = document.getElementById("something")
    const comButtonParent = document.getElementById("user-outfits-collection")
    const comOne = document.getElementById("outfit-1-comments")
    const comTwo = document.getElementById("outfit-2-comments")
    const comThree = document.getElementById("outfit-3-comments")
    
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

    comButtonParent.addEventListener("click", function(e) { 
        if (e.target.id === "cmt-outfit-1"){
            cmtHideShow1 = !cmtHideShow1;
            if (cmtHideShow1) {
                comOne.style.display = "block";
            } else {
                comOne.style.display = "none";
            }
        }
        if (e.target.id === "cmt-outfit-2"){
            cmtHideShow2 = !cmtHideShow2;
            if (cmtHideShow2) {
                comTwo.style.display = "block";
            } else {
                comTwo.style.display = "none";
            }
        }
        if (e.target.id === "cmt-outfit-3"){
            cmtHideShow3 = !cmtHideShow3;
            if (cmtHideShow3) {
                comThree.style.display = "block";
            } else {
                comThree.style.display = "none";
            }
        }
    });
})

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
    getComments();
    postComment();
    deleteComment();
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
    let shoeImg = document.querySelector(`[data-id="shoe ${outfit.shoe_id}"]`)
    let bugTest = shoeImg.querySelector('img').src
    shoeEl.src = bugTest

    let likeEl = document.getElementById(`like-outfit-${num}`)
    likeEl.innerText = `❤️ ${outfit.likes}`
    likeEl.dataset.outfit = outfit.id

    let cmtEl = document.getElementById(`cmt-outfit-${num}`)
    cmtEl.dataset.outfit = outfit.id
}

const buttons = () => {
    const outfitCardCollection = document.getElementById("user-outfits-collection")
    outfitCardCollection.addEventListener("click", function(e) {
        if (e.target.className === "like"){
            incrementLike(e.target)
        }
    })
}

const incrementLike = (likeButton) => {
    let num = likeButton.innerText.split(" ")[1]
    likeButton.innerText = `❤️ ${++num}`
    fetch(`http://localhost:3000/outfits/${likeButton.dataset.outfit}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({ likes: num })
    })
}

const getComments = () => {
    fetch("http://localhost:3000/comments")
    .then(resp => resp.json())
    .then(comments => renderComments(comments))
}

const renderComments = comments => {
    comments.forEach(comment =>{
        renderCmt(comment)
    })
}

const renderCmt = comment => {
    // const btn = document.createElement('button')
    // btn.className = "delete-comment"
    // btn.innerHTML = "✗"

    const li = document.createElement('li')
    li.dataset.id = comment.id
    li.className = "commentsInput"
    li.innerHTML = `
        <button class="delete-comment">✗</button>
        <b class="userName">${comment.name} :</b> 
        <small class= "textInput"> ${comment.text}</small>
        `
    // li.appendChild(btn)

    const cmtEl1 = document.getElementById(`cmt-outfit-1`).dataset.outfit
    const cmtElNum1 = parseInt(cmtEl1)

    const cmtEl2 = document.getElementById(`cmt-outfit-2`).dataset.outfit
    const cmtElNum2 = parseInt(cmtEl2)
    
    const cmtEl3 = document.getElementById(`cmt-outfit-3`).dataset.outfit
    const cmtElNum3 = parseInt(cmtEl3)
    
    const cmtCard1 = document.getElementById('outfit-1-comments')
    const cmtCard2 = document.getElementById('outfit-2-comments')
    const cmtCard3 = document.getElementById('outfit-3-comments')

    if(comment.outfit_id === cmtElNum1) {
        cmtCard1.appendChild(li)
    } else if (comment.outfit_id === cmtElNum2) {
        cmtCard2.appendChild(li)
    } else if (comment.outfit_id === cmtElNum3) {
        cmtCard3.appendChild(li)
    }    
}

function postComment() {
    // const outfitCollection = document.getElementById("user-outfits-collection")
    document.addEventListener("click", e => {
        e.preventDefault()
            if (e.target.id === "post1") {
                let nameInput = document.getElementById("name-1").value
                let textInput = document.getElementById("comment-1").value
                let outfitInput = document.getElementById(`cmt-outfit-1`).dataset.outfit
                const outfitNum = parseInt(outfitInput)
                
                fetch("http://localhost:3000/comments", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({ 
                        name: nameInput,
                        text: textInput,
                        outfit_id: outfitNum
                    })
                })
                .then(resp => resp.json())
                .then(com => renderCmt(com))
                e.target.parentNode.reset()
            }
            if (e.target.id === "post2") {
                let nameInput = document.getElementById("name-2").value
                let textInput = document.getElementById("comment-2").value
                let outfitInput = document.getElementById(`cmt-outfit-2`).dataset.outfit
                const outfitNum = parseInt(outfitInput)
                
                fetch("http://localhost:3000/comments", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({ 
                        name: nameInput,
                        text: textInput,
                        outfit_id: outfitNum
                    })
                })
                .then(resp => resp.json())
                .then(com => renderCmt(com))
                e.target.parentNode.reset()
            }
            
            if (e.target.id === "post3") {
                console.log(e.target)
                let nameInput = document.getElementById("name-3").value
                let textInput = document.getElementById("comment-3").value
                let outfitInput = document.getElementById(`cmt-outfit-3`).dataset.outfit
                const outfitNum = parseInt(outfitInput)
                
                fetch("http://localhost:3000/comments", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({ 
                        name: nameInput,
                        text: textInput,
                        outfit_id: outfitNum
                    })
                })
                .then(resp => resp.json())
                .then(com => renderCmt(com))
                e.target.parentNode.reset()
            }
            
    })
}

function deleteComment() {
    const postCollection = document.getElementById("outfit-1-comments")
    postCollection.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.className === "delete-comment"){
            let commentId = e.target.parentNode.dataset.id
            fetch(`http://localhost:3000/comments/${commentId}`, { method: "DELETE" })
            e.target.parentNode.remove()
        }
    })
    const postCollectionTwo = document.getElementById("outfit-2-comments")
    postCollectionTwo.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.className === "delete-comment"){
            let commentId = e.target.parentNode.dataset.id
            fetch(`http://localhost:3000/comments/${commentId}`, { method: "DELETE" })
            e.target.parentNode.remove()
        }
    })
    const postCollectionThree = document.getElementById("outfit-3-comments")
    postCollectionThree.addEventListener("click", e => {
        e.preventDefault()
        if (e.target.className === "delete-comment"){
            let commentId = e.target.parentNode.dataset.id
            fetch(`http://localhost:3000/comments/${commentId}`, { method: "DELETE" })
            e.target.parentNode.remove()
        }
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



    // COMMENTS SECTION
    // √√√ event listener in place for comment button
    // √√√√ on click implement hide and seek functionality (seek)
    // √√√√ on seek, the comments card displays (pushing the other outfit cards down)
    //  in comments card:
    //      a) display existing comments (div)
    //          i) designate comment name and text to li element
    //         ii) include delete button
    //      b) new comment form
    //          i) form has name input
    //         ii) form has text input
    //        iii) form has submit button
    //          v) form needs to set comment dataset id
    //         iv) form needs to capture id of outfit
    //      c) fetch requests for get, post and delete
    //      
    // 
    


    // Super Checklist
    // √√√√√√√√Outfits section: increment like button 
    // √√√√√√√√√√(fetch "update") for likes button
    // 
    // √√√√√ score logic on backend model
    // √√√√√ leaderboard logic on backend model
    // √√√√√ allow js to access logic through controller
    // √√√√√√ render leaderboard on the dom
    // 
    
    // hide and seek on the all outfits
    // 
    // implement comments feature
    // full CRUD on comments
    // hide and seek on comments
    
    // 🌎


