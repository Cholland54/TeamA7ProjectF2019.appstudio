
btnRegisterPlayer.onclick=function(){

let firstName = inptFirstName.value
let lastName = inptLastName.value
let street = inptStreet.value
let state = inptState.value
let city = inptCity.value
let zipcode = inptZipcode.value
let email = inptEmail.value
let phone = inptPhone.value

let username = inptUsername.value
let password = inptNewPass

let query = "INSERT INTO player_info (username, passcode, first_name, last_name, street, city, state, zipcode, email, phone_number) values ('"+ username +"', '"+ password +"', '" + firstName + "', '"+ lastName +"', '"+ street +"', '"+ city +"', '"+ state +"', '"+ zipcode +"', '"+ email +"', '"+ phone +"')"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=375groupa7&query=" + query)

    if (req1.status == 200) { //transit worked.
    
                inptFirstName.value = " "
                inptLastName.value = " "
                inptStreet.value = " "
                inptState.value = " "
                inptCity.value = " "
                inptZipcode.value = " "
                inptEmail.value = " "
                inptPhone.value = " "
                inptUsername.value = " "
                inptNewPass.value = " "
 
    
    
            if (req1.responseText == 500) {
                NSB.MsgBox("You are now registerd!")
        
               
              } else {
                NSB.MsgBox("There was an issue with registering!")
                }
            
            
            
            
      
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }
    
 //end 
}

btnLoginPage.onclick=function(){
  ChangeForm(homeScreen)
}
