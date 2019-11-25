let sportList = ["Basketball", "Football", "Baseball", "Golf", "Tennis", "Soccer"]
let needList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let haveList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

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