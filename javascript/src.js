$(document).ready(function(){
  //var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$.ajax({
type:"GET",
  url:"https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
  headers:{
  "Client-ID":"3xuge9gq2tx8oeec59bh4dudj3ozau"
},
success:function(data){
        console.log(data.follows);


    for(var i = 0; i <= data.follows.length; i++){
      var status = data.follows[i].channel.status
      var name = data.follows[i].channel.name;
      var logo = data.follows[i].channel.logo;
      var link = data.follows[i].channel.url;
      
      
       if(status != null){
         $("ul").append("<li class='w3-padding-64'> <img src="+logo+" class='w3-left w3-circle w3-margin-right' /> <a href="+link+"><span class='w3-xlarge'>" +name+ " is online</span></a> </li>")
       }
      //  else{
      //    $("ul").append("<li class='w3-padding-16'>" +name+ " is offline</li>")
      //  }
    }

    // if( stream != null){
    // var channelName = data.stream.channel.name;
    // console.log(channelName);
    // var logo = data.stream.channel.logo;
    // $("ul").append("<li class='w3-padding-16'> " +channelName+ " is online</li>");
    // }
    // else{
    //   $("ul").append("<li class='w3-padding-16'> " +stream+ " is offline</li>");
    // }
   
}
});
  

})
