//1125 update
let sportList = ["Basketball", "Football", "Baseball", "Golf", "Tennis", "Soccer"]
let needList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let haveList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

registerScreen.onshow=function(s){
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
  let queryPost = "INSERT INTO game_entry (game, peopleNeed, peopleHave, gameTime, locationAddress) VALUES ('" + drpSport.value + "', '" + drpNeed.value + "', '" + drpHave.value + "', '" + inptTime.value + "', '" + inptLocation.value + "')"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + queryPost)
}

// see what user clicked on in the majors dropdown
// notice I added an 's' parameter to the function (holds the chosen text)
drpBestMajor.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpBestMajor.value = s   // make dropdown show choice user made
    NSB.MsgBox("s is " + s + " and .selection is " + drpBestMajor.selection)
  }
}