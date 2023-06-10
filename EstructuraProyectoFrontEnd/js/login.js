$(document).ready(function(){
  $('#btnLogin').on("click",function(){
    let usuario = $('#inpUser').val();
    let pass = $('#inpPass').val();
    if(usuario === "" || pass === ""){
      alert("Hay campos vacios, ingrese usuario y contreña por favor.");
      return;
    }
    data = JSON.stringify({
      "UserName": usuario,
      "Password": pass
    });
    $.ajax({
      type: "POST",
      url: "https://localhost:7110/api/Identity/Login",
      data: data,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {  
        console.log(data);     
        if(!data.Success)
        {
          alert(data.Message);
          return;
        }
        else
        {
          $(location).attr('href','http://127.0.0.1:5500/html/Home.html');
        }
       console.log(data);
      },
      failure: function (data) {
       alert(data);
      },
      error: function (data) {
       alert(data);
      }
     });
  });
});