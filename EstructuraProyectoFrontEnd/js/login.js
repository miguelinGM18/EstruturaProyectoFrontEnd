
/*
const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('button', (e)=>{
    e.preventDefault()
    const Password = document.querySelector('#Password').value
    const UserName = JSON.parse(localStorage.getItem(UserName)) || []
    const valUser = UserName.find(UserName => UserName.Password === Password)

    if(!valUser){
        return alert ("Acceso denegado")
    } 
    alert('Bienvenido')
    window.location.href = 'Home.html'
})







/*
var settings = {
  "url": "https://localhost:7110/api/Identity/Login?=",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "UserName": "EseWey",
    "Password": "Password"
  }),
};

$.ajax(settings).done(function (login) {
  console.log(login);
  
});
*/
