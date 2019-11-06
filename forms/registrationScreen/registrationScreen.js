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
            ChangeForm(Email)
            break
        case 'Facebook':
            
            break
        case 'Google':
            
            break
        case 'Twitter':
            
            break
        case 'Instagram':
            
            break
        default: 
            NSB.MsgBox("Not an option.")
            break
  }
}