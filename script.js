const input=document.getElementById("input");
const eye=document.getElementById("image");

eye.addEventListener("click",()=>{
    if(input.type=="password"){
        input.type="text";
        eye.src="open-eye.png";
    }
    else{
        input.type="password";
        eye.src="close-eye.png"
    }
})