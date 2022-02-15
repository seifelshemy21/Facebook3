function formvalidate() {
    var fname =  document.getElementById("fname").value;
    var sname =  document.getElementById("sname").value;
    var email =  document.getElementById("email").value;
    var pass =  document.getElementById("pass").value;
    var error =  document.getElementById("error");
    var text = "";
  
    if (fname.length < 4) {
       text = "please enter valid first name!";
      error.innerHTML = text ;
      return false;
    }
    else if (email.indexOf("@") == -1 || email.length < 6 )  {
      text = "please enter valid email!";
      error.innerHTML = text ;
      return false;
  
    }
    else if (pass.length < 6) {
      text = "please enter valid password!";
      error.innerHTML = text ;
      return false;
    }
   else{
       return true;
   }
  }
  
  
  function formlogin() {
      var email2 =  document.getElementById("email2").value;
      var pass2 =  document.getElementById("pass2").value;
      var error2 =  document.getElementById("error2");
      var text = "";
  
    
       if (email2.indexOf("@") == -1 || email2.length < 6 )  {
         text = "please enter valid email!";
         error2.innerHTML = text ;
         return false;
     
       }
       else if (pass2.length < 6) {
         text = "please enter valid password!";
         error2.innerHTML = text ;
         return false;
       }
      else{
          return true;
      }
  }