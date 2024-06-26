var total = document.querySelector("#total")
var moins = document.querySelectorAll("#moins")
var plus = document.querySelectorAll("#plus")
var quantité = document.querySelectorAll("#quantité")
var prix = document.querySelectorAll("#prix")
var heart = document.querySelectorAll("#heart")
var trash = document.querySelectorAll("#trash")
var cards=document.querySelectorAll(".card")
bar switch=document={.querySelector(".input")

}

function totalprice() {
    var s = 0
    for (let i = 0; i < quantité.length; i++) {
        s += quantité[i].innerHTML * prix[i].innerHTML

    }
    return total.innerHTML = s



}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function add() {
        quantité[i].innerHTML++
        totalprice()
    })

}
for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener("click", function add() {
        if (quantité[i].innerHTML > 0)
            quantité[i].innerHTML--
        else {
            quantité[i].innerHTML = 0
        }
        totalprice()
    })

}
for (let i = 0; i < trash.length; i++)
    heart[i].addEventListener("click", function hearts() {
        if (heart[i].style.color = "red") {
             heart[i].style.color = "black"
        }
        else{
            heart[i].style.color="red"

        }
    })
    for (let i = 0; i < trash.length; i++) {
        trash [i].addEventListener("click", function trash() {
            cards[i].remove()

})

}
var body=document.querySelector("body")
switchs.addEventListener("click",function() {
if (body.style.backgroundcolor=="vide"){
    body.style.backgroundcolor="black"

}    
else{
    body.style.backgroundcolor=""
}
} )