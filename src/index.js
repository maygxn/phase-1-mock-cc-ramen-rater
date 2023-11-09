// See all ramen images in the div with the id of ramen-menu. (ramen images show in div)
const ramenMenuDiv = document.getElementById("ramen-menu")
const url = "http://localhost:3000/ramens"

// When the page loads, request the data from the server to get all the ramen objects. (fetch)
fetch(url)
.then(resp => resp.json())
.then((ramenData) => {
    ramenData.forEach(renderRamen)
})


    // Then, display the image for each of the ramen using an img tag inside the #ramen-menu div. (display = render)
function renderRamen(ramen) {
    // create element img
    let ramenImage = document.createElement("img")
    // // display the image
    ramenImage.src = ramen.image
    ramenImage.alt = ramen.name
    
    
    // Click on an image from the #ramen-menu div (add EventListener, click)
    ramenImage.addEventListener("click", (e) => {
        ramenDetails(ramen)
    })
    
    // // attach img to #ramen-menu div
    ramenMenuDiv.append(ramenImage)
}



    // and see all the info about that ramen displayed inside the #ramen-detail div
function ramenDetails(ramen) {
    // grab the ramen-detail ID
    const ramenDetailDiv = document.getElementById("ramen-detail")
    //need to grab image, name, restaurant, rating, comment
    const detailImage = ramenDetailDiv.getElementsByClassName("detail-image")[0]
        detailImage.src = ramen.image
        detailImage.alt = ramen.name
    const detailName = ramenDetailDiv.getElementsByClassName("name")[0]
        detailName.innerText = ramen.name
    const detailRest = ramenDetailDiv.getElementsByClassName("restaurant")[0]
        detailRest.innerText = ramen.restaurant
    const detailRating = document.getElementById("rating-display")
        detailRating.innerText = ramen.rating
    const detailComment = document.getElementById("comment-display")
        detailComment.innerText = ramen.comment
}

// C3: Create a new ramen after submitting the new-ramen form.
// 1. find form
const newRamenForm = document.getElementById("new-ramen")
// 2. submit addEventListener
newRamenForm.addEventListener("submit", (e) => {
e.preventDefault()
// 3. create new ramen object
    const newRamen = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "image": e.target.image.value,
        "rating": parseInt(e.target.rating.value),
        "comment": e.target['new-comment'].value
    }
    renderRamen(newRamen)
})





// The new ramen should be added to the#ramen-menu div.
// The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.