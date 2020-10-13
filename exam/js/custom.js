function Login(){
  var x = document.getElementById("inputId").value;
  if(x == ""){
    return false;
  }
  else{
    alert('Account not registered in the admin page. Please try again later.');
  }
}
