var AllProducts = document.querySelectorAll(".items_meals .item_meal") 
var selcted_prod = document.querySelector("#content-selected")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var totalPrice = 0;


 AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalPrice +=   parseInt (item.getAttribute ("price")) 
        
        selcted_prod.innerHTML += item.textContent + "  |  " + "    "

        if (selcted_prod.innerHTML != ""){
            btn1.style.display = "block";
            

        }
    }
 })

 btn1.onclick = function () {
    if (selcted_prod.innerHTML != ""){
        btn2.style.display = "block";
        

    }
    btn2.innerHTML = totalPrice + "$"
 }


//  console.log(totalPrice + "$")