const btn = document.querySelectorAll('.btn')
const screen = document.getElementById('num')
const del =document.querySelector('.del')

btn.forEach(item => item.addEventListener('click', unButton))
del.addEventListener('click', ()=>{
    
})

function unButton(){
    let btnChange = setInterval(change, 1000)
}
function change(){
    item.style.boxShadow = "10px 10px 25px #bebebe, -10px -10px 25px #ffffff;"
    clearInterval(btnChange)
}
function display(num){
    screen.value += num;
}
function Calc(){
    try{
        screen.value = eval(screen.value)
    }
    catch(err){
        alert("invalid")
    }
}
function clear(){
    screen.value = "";
}
