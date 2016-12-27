 $(document).ready(function(){

  var arr = ["ESL_SC2", "OgamingSC2", "Cretetion", "Freecodecamp", "Storbeck", "Habathcx", "RobotCaleb", "Noobs2ninjas"];
  streamurl = "https://api.twitch.tv/kraken/streams/",
  userurl = "https://api.twitch.tv/kraken/users/",
 
arr.forEach(function(user){
  $.getJSON(userurl + user + "?client_id=3xuge9gq2tx8oeec59bh4dudj3ozau&callback=?",function(result){
  $.getJSON(streamurl + user + "?client_id=3xuge9gq2tx8oeec59bh4dudj3ozau&callback=?",function(data){

    if(data.stream == null){
  
      $("ul").append("<li class='not_active w3-animate-zoom' ><a href='https://www.twitch.tv/"+user+"' > " +user+ " is offline </a></li>")
    }
    else{
       var channelURL = data.stream.channel.url;
  $("ul").append("<li class='active w3-animate-zoom'><a href="+channelURL+" >" +user+ " is online</a></li>");
    }

///////////////////////////////////// online function start
    $(".online").on('click',function(){
      $("li.not_active").hide();
      $("li.active").show();
    })
///////////////////////////////////////// online function end

////////////////////////////////////////  offline function start
    $(".offline").on("click",function(){
        $("li.active").hide();
        $("li.not_active").show();
    });
///////////////////////////////////////  offline function ends
     
//all functon start 
     $(".all").on('click',function(){
       $("li.not_active").show();
      $("li.active").show();
     })
// all function ends
  }) // data ends
  }); // result ends
}); // user ends

 })
