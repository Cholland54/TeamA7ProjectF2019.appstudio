let sportList = []
let needList = []
let haveList = []

registerScreen.onshow=function(){
    drpSport.clear()   
  for (i = 0; i < sportList.length; i++) {
  drpSport.addItem(sportList[i])
  }
}

registerScreen.onshow=function(){
    drpNeed.clear()   
  for (i = 0; i < needList.length; i++) {
  drpNeed.addItem(needList[i])
  }
}

registerScreen.onshow=function(){
    drpHave.clear()   
  for (i = 0; i < haveList.length; i++) {
  drpHave.addItem(haveList[i])
  }
}

btnPost.onclick=function(){
  
}