// Write your code here...
fetch ("http://localhost:3000/menu")
.then(res => res.json())
.then (challengeOne)
// .then (challengeTwo) CAN'T CHAIN - FIGURE OUT WHY

function challengeOne(menuItems){
    for (let i=0; i<menuItems.length; i++){
        const item = document.createElement("span"); //span elements 
        const itemName = item.innerHTML = menuItems[i].name; //assign names to the items
        //console.log(itemName)
        const menuDiv = document.getElementById('menu-items') //grab menu items
        //console.log(menuDiv)
        menuDiv.append(item) //add items to the menu div HTML
    }

    //Challenge #2 - adding all the image 
    const imageURL = menuItems[0].image
    const itemName = menuItems[0].name
    const itemDescription = menuItems[0].description
    const itemPrice = menuItems[0].price
    
    const dishName = document.getElementById('dish-name')
    dishName.append(itemName)
    const dishDescription = document.getElementById('dish-description')
    dishDescription.append(itemDescription)
    const dishPrice = document.getElementById('dish-price')
    dishPrice.append(`$${itemPrice}`)
    const dishURL = document.getElementById('dish-image')
    dishURL.src = imageURL
    
}


// fetch ("http://localhost:3000/menu", {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         name: postText

//     })
// })
