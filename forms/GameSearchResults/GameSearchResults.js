let results = []

GameSearchResults.onshow=function(){

    let cityToSearch = txtCity.value
    let query = `SELECT game_info.*, game_players.player_id FROM game_info JOIN game_players ON game_info.game_id = game_players.game_id WHERE city_located = "${cityToSearch}" AND game_type = "${chosenSport}"`
console.log(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=375groupa7&query=" + query)

    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no games of that type in that city, try widening your search.")
    else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i] + "\n"
        inptNumberSoFar.value = results[0][2]
        inptHowManyMore.value = results[0][3]
        inptDesiredStart.value = results[0][7]
       selLocation.addItem(results[0][5])
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
        
    let query2 = `SELECT game_info.game_id, player_info.username FROM game_info JOIN game_players ON game_info.game_id = game_players.game_id JOIN player_info ON game_players.player_id = player_info.Player_id WHERE player_info.player_id = ${results[0][8]};`
console.log(query2)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=375groupa7&query=" + query2)

    if (req1.status == 200) { 
        results2 = JSON.parse(req1.responseText)
    if (results2.length == 0)
        NSB.MsgBox("Error obtaining the game post owner.")
    else {        
        let message = ""
        for (i = 0; i <= results2.length - 1; i++)
            message = message + results2[i] + "\n"
              inptOrganizer.value = results2[0][1]
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}  

selLocation.onclick=function(){
  chosenAddress = selLocation.item
  api_key = "AIzaSyDRvg3F6H8-NACjWlXzZthqT8wJFU2GIlg"
  
}
