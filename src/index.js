// write your code here 

fetch ('http://localhost:3000/ramens')
    .then (resp => resp.json())
    .then ((ramens) =>  {
        ramens.forEach(ramen => {
            const ramenImage = document.createElement('img')
            ramenImage.src = ramen.image;
            ramenImage.alt = ramen.name;
            ramenImage.addEventListener('click' , () => ramenDisplay(ramen));
            document.querySelector('#ramen-menu').appendChild(ramenImage)
        })
    });

function ramenDisplay(ramen) {

    const ramenImage = document.querySelector('#ramen-detail img')
    ramenImage.src = ramen.image;

    const ramenName = document.querySelector('#ramen-detail h2')
    ramenName.textContent = ramen.name;

    const ramenRestaurant = document.querySelector('#ramen-detail h3')
    ramenRestaurant.textContent = ramen.restaurant;

    const ramenRating = document.querySelector('#rating-display');
    ramenRating.textContent = ramen.rating;

    const ramenComment = document.querySelector('#comment-display')
    ramenComment.textContent = ramen.comment;
}


function createNewRamen() {

    document.querySelector('#new-ramen').addEventListener("submit", (event) => {
        
        event.preventDefault();

        const newRamen = {
            image : event.target.image.value,
            name : event.target.name.value,
            restaurant : event.target.restaurant.value,
            rating : event.target.rating.value,
            comment : event.target['new-comment'].value,
        };

        const brandNewRamen = document.createElement('img')
        brandNewRamen.src= newRamen.image
        brandNewRamen.alt = newRamen.name
        brandNewRamen.addEventListener('click' , () => displayNewRamen(newRamen))
        document.querySelector('#ramen-menu').appendChild(brandNewRamen)

        event.target.reset();

        document.querySelector('#ramen-menu').append

    
    })
};

createNewRamen();

