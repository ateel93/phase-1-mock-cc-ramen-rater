/*
1. Fetch("http://localhost:3000/ramens") 
    a. After fetch you should see all ramen <img> in the <div id="ramen-menu">.
    b. Display the image for each of the ramen using an <img> tag inside the <div id="ramen-menu">.
2. User should be able to click on an <img> from the <div id="ramen-menu">  
    a. Once clicked, you should see all the info about that ramen displayed inside the <div id="ramen-menu"> 
    b. All content = name, restaurant, rating, comment
    c. Where it says insert comment here and insert rating here.
3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

*/



fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens =>{
    let ramenMenu = document.querySelector("#ramen-menu")
    let newRamenForm
    ramens.forEach(ramen => {
        ramenMenu = document.querySelector("#ramen-menu")
        let ramenImg = document.createElement("img")
        ramenImg.src = ramen.image
        ramenMenu.append(ramenImg);

        ramenImg.addEventListener('click', () => {
            ramenImage.src = ramen.image
            ramenName.textContent = ramen.name
            ramenRestaurant.textContent = ramen.restaurant
            ramenRating.textContent = ramen.rating
            ramenComment.textContent = ramen.comment
        })
    })

    const ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramens[0].image
    const ramenName = document.querySelector('.name')
    ramenName.textContent = ramens[0].name
    const ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.textContent = ramens[0].restaurant
    const ramenRating = document.querySelector("#rating-display")
    ramenRating.textContent = ramens[0].rating
    const ramenComment = document.querySelector("#comment-display")
    ramenComment.textContent = ramens[0].comment
       
    // const showDetails = document.querySelector("#ramen-detail")

    ramenMenu.append(newRamenForm)


    addToCart()
 
    function addToCart(ramens){
        let newRamenForm = document.querySelector("#new-ramen")
        // let newItemName = document.querySelector("#new-name")
        let nameSubmit = document.createElement("h2")
            // let newRestaurant = document.querySelector("#new-restaurant")
        let restaurantSubmit = document.createElement("h3")
            // let newImage = document.querySelector("#image")
        let imageSubmit = document.createElement("img")
            // let newRating = document.querySelector("#new-rating")
        let ratingSubmit = document.createElement("p")
            // let newComment = document.querySelector("#new-comment")
        let commentSubmit = document.createElement("p")

        newRamenForm.addEventListener('submit', (event) => {
            // event.preventDefault(); 
        })
    }




})


