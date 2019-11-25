// These are global variables that will be used in other forms

let sports = ["Golf","Tennis","Basketball","Football","Baseball","Soccer","Wiffle Ball",
"Ultimate Frizbee","Rugby","Disk Golf","Tag"]
Search_For_Games.onshow=function(){
      drpSports.clear()   
  for (i = 0; i <= sports.length - 1; i++) 
    drpSports.addItem(sports[i])
}

drpSports.onclick=function(s){
    if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drpSports.value = s   // make dropdown show choice user made

btnSearch.onclick=function(){

    var cityToSearch = txtCity.value
    var query = `SELECT time_to_play, game_type FROM game_info WHERE city_located = "${cityToSearch}" AND game_type = "${s}"`

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=375groupa7&query=" + query)

    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no games of that type in that city, try widening your search.")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i] + "\n"
       selResults.addItem(message)
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)

} //close onclick


selResults.onclick=function(){
// this takes you to another form that shows some of the details of the selected business
    chosenIndex = selResults.item  // holds index of chosen business
    chosenSport = drpSports.value  // holds index of chosen business
    ChangeForm(GameSearchResults)
    }
  }
}
