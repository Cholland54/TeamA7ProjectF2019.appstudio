 login




btnLogin.onclick=function(){
let userName = inptUserName.value
let password = inptPassword.value

let query = "SELECT * FROM username_password WHERE username = " + '"' + userName + '"' + "AND pass = " + '"' + password + '"'

btnLogin.onclick=function(){
 Updated upstream
  ChangeForm(Login)
}

btnRegister.onclick=function(){
  ChangeForm(Register)
}

let userName = inptUserName.value
let password = inptPassword.value

let query = "SELECT username, passcode FROM player_info WHERE username = " + '"' + userName + '"' + "AND passcode = " + '"' + password + '"'
 master
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=375groupa7&query=" + query)

    if (req1.status == 200) { //transit worked.
            results = JSON.parse(req1.responseText)
                    if (results.length == 0 ) {
                    console.log(results)
                    NSB.MsgBox("does not exists")
                  } else {
                    
                    NSB.MsgBox("works")
                    }
      
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }

//375iscool! cholland
}

btnRegister.onclick=function(){
login
  
}


ChangeForm(register)
  
}

 Stashed changes
master
