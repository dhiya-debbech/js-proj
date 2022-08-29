let qtes= document.querySelectorAll(".qte");
let btnplus= document.querySelectorAll(".plus");
let btnminus= document.getElementsByClassName("minus");
let element = document.querySelectorAll(".fa-trash-o");
let hearts = document.querySelectorAll(".fa-heart");
console.log(element)
for(let i=0;i<btnplus.length;i++){
btnplus[i].addEventListener("click",function(){

   
qtes[i].innerHTML++;
total()

}

 ) 
btnminus[i].addEventListener("click",function(){
    if (qtes[i].innerHTML>0){
        qtes[i].innerHTML--;
        total()
    }
})

}

function total(){
    let prix = document.querySelectorAll(".price");
    let qtes= document.querySelectorAll(".qte")
     let tp=0
    for(let i =0; i < prix.length; i++){
        tp=tp+prix[i].innerHTML*qtes[i].innerHTML
        console.log("qte",qtes[i].innerHTML)
        console.log("soum",prix[i].innerHTML)
    }
    document.querySelector(".price_").innerHTML=tp

}
for(let i = 0; i < element.length; i++){
    element[i].addEventListener("click" , function(){
        element[i].parentElement.parentElement.remove();
        console.log(element)
    })
}
for (let i =0; i<hearts.length;i++){
    hearts[i].addEventListener("click" , function(){
        if (hearts[i].style.color=="red"){
            hearts[i].style.color="grey"
        }
        else{
            hearts[i].style.color="red"
        }
    })
}



//console.log() 

             