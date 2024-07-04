const signinbtn = document.getElementById("signin");
const signupbtn = document.getElementById("signup");
const signindiv = document.getElementById("signindiv");
const signupdiv = document.getElementById("signupdiv");


signupbtn.addEventListener("click",()=>{
    signindiv.style.left ="-100%"
    signupdiv.style.right = "0%"
})

signinbtn.addEventListener("click",()=>{
    signindiv.style.left ="0%"
    signupdiv.style.right = "-100%"
})