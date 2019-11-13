btnLogin.onclick=function(){

let userName = inptUserName.value
let password = inptPassword.value

 req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + userName + "&j_password=" + password)
    if (req1.status == 200) {  //AJAX call worked.
        //1 good 0 bad
        
        if (req1.responseText == 1) {
       ChangeForm(sports)
      } else {
        NSB.MsgBox("oops")

        }
        
        
        
        
        
        
    } else {  //had a problem with the AJAX request. 
        NSB.MsgBox("oops")
    }






















  
}

btnRegister.onclick=function(){
  ChangeForm(register)
}