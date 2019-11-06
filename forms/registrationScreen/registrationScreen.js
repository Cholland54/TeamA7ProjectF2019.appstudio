let registerList = ['Email','Facebook','Google', 'Twitter','Instagram']

registerScreen.onshow=function(){
    drpOptions.clear()   
  for (i = 0; i < registerList.length; i++) {
  drpOptions.addItem(registerList[i])
  }
}


drpOptions.onclick=function(s){
    if (typeof(s) == "object")   
      return 
    }
    
    switch(s) { 
        case 'Email':
            ChangeForm(loginCU)
            break
        case 'Facebook':
            ChangeForm(favFoods)
            break
        case 'Google':
            ChangeForm(dessertVoting)
            break
        case 'Describe Me':
            ChangeForm(describeYou)
            break
        case 'Twitter':
            ChangeForm(favExercises)
            break
        case 'Instagram':
            ChangeForm(favExercises)
            break
        default: 
            NSB.MsgBox("Not an option.")
            break
  }
}