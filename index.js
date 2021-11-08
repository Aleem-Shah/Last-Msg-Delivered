
const button= document.getElementById("btn");
button.addEventListener("click",function(){
    let text= document.getElementById("myInput").value
    let para= document.querySelector(".MSG");
    para.textContent = text;
      
})
