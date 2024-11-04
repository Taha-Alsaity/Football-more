
document.addEventListener("DOMContentLoaded", () => {
    getstanding();
});
 


  function getstanding(){

    fetch("/api/standings/")
    .then((response) => {
        if (!response.ok) {
            // Log the error if the response is not OK
            console.error('Network response was not ok:', response.statusText);
            throw new Error('Failed to fetch standings');
        }
        return response.json(); // Parse the JSON
    })
    .then((data) => {

      console.log(data);
      const standings = data.standings;
      document.getElementById("standing").innerHTML = "";
       let tableContent = "";
      for( standing of standings){
       
        const tables = standing.table;
        for(table of tables){
          let content = "";

                                  if(table.position <= 8){
                                 content = `
                                  
                                          <article style="border-left:5px solid rgb(65, 200, 39) ;" class="row  ">
                                    <ul >
                                    
                                      <li><img src="${table.team.crest}" width="25"></li>
                                      <li  ><a style="color: rgb(30, 255, 30);" href="#">${table.team.tla}</a></li>
                                      <li>${table.playedGames}</li>
                                      <li>${table.won}</li>
                                      <li>${table.draw}</li>
                                      <li>${table.lost}</li>
                                      <li>${table.points}</li>
                                      <li>${table.goalDifference}</li>
                                    </ul>
                            
                                  </article>`;
                                }else if(table.position > 8 && table.position <= 24){
                                 content = `
                                  
                                  <article style="border-left:5px solid orange;" class="row  ">
                            <ul >
                            
                              <li><img src="${table.team.crest}" width="25"></li>
                              <li  ><a style="color: orange;" href="#">${table.team.tla}</a></li>
                              <li>${table.playedGames}</li>
                              <li>${table.won}</li>
                              <li>${table.draw}</li>
                              <li>${table.lost}</li>
                              <li>${table.points}</li>
                              <li>${table.goalDifference}</li>
                            </ul>

                          </article>`;
                                }else{
                                  content = `
                                  
                                  <article style="border-left:5px solid red" class="row  ">
                            <ul >
                            
                              <li><img src="${table.team.crest}" width="25"></li>
                              <li  ><a style="color: rgb(255, 74, 83);" href="#">${table.team.tla}</a></li>
                              <li>${table.playedGames}</li>
                              <li>${table.won}</li>
                              <li>${table.draw}</li>
                              <li>${table.lost}</li>
                              <li>${table.points}</li>
                              <li>${table.goalDifference}</li>
                            </ul>

                          </article>`;
                                }

        tableContent += content;
      }
      }
      document.getElementById("standing").innerHTML = tableContent;
    })
    .catch((error) => {
                console.error('Error fetching standings:', error);
            });
        }

        // Call getstanding() once the DOM is fully loaded
       
  
