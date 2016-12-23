// // $(document).ready(function(){
  var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// //   for(var i = 0 ; i < arr.length; i++){

// // var url = "https://api.twitch.tv/kraken/streams/"+arr[i]+"";
  
// // $.ajax(url,{
// // type:"GET",
// //   headers:{
// //   "Client-ID":"3xuge9gq2tx8oeec59bh4dudj3ozau"
// // },
// // success:function(data){
        
// //       console.log(data);


// //     // for(var i = 0; i <= data.follows.length; i++){
// //     //   var status = data.follows[i].channel.status
// //     //   var name = data.follows[i].channel.name.toUpperCase();
// //     //   var logo = data.follows[i].channel.logo;
// //     //   var link = data.follows[i].channel.url;
// //     //   var noImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2000px-No_image_available.svg.png";
      
      
// //     //    if(status != null){
// //     //      $("ul").append("<li class='w3-padding-55'> <img src="+logo+" class='w3-left w3-circle w3-margin-right' /> <a href="+link+"><span class='w3-xlarge'>" +name+ " is online</span></a> </li>")
// //     //    }
// //     //     else{
// //     //       $("ul").append("<li class='w3-padding-55'><img src="+noImg+" class='w3-left w3-circle w3-margin-right' />  <a href="+link+"><span class='w3-xlarge'> " +name+ " is offline</span></a></li> ")
// //     //     }
// //     // }
// // }
// // });
// //   }  

// // })
// console.log(32);
// for(var i = 0 ; i < arr.length; i++){
// var url = [];
//  url.push('https://api.twitch.tv/kraken/streams/' + arr[i] + '?client_id=3xuge9gq2tx8oeec59bh4dudj3ozau&callback=?');
// }
// for(var j = 0 ; j < url.length; j++){
// $.getJSON(url[j],function(data){
//   console.log(url[j]);
  
  
// })
// }
 streamurl = "https://api.twitch.tv/kraken/streams/",
 userurl = "https://api.twitch.tv/kraken/users/",
 arr1 = [];
arr.forEach(function(user){
  $.getJSON(userurl + user + "?client_id=3xuge9gq2tx8oeec59bh4dudj3ozau&callback=?",function(result){
  $.getJSON(streamurl + user + "?client_id=3xuge9gq2tx8oeec59bh4dudj3ozau&callback=?",function(data){

    if(data.stream == null){
       arr1.push(user);
      $("ul").append("<a href='https://www.twitch.tv/"+user+"'><li> " +user+ " is offline </li></a>")
    }
    else{
       var channelURL = this.stream.channel.url;

  $("ul").append("<a href="+channelURL+"><li>" +user+ " is online</li></a>")
    }
  }) // data ends
  }); // result ends
}); // user ends

// onclick function 
function online(arr){
  var arg = Array.prototype.slice.call(arguments);
  var arg2 = Array.prototype.slice.call(arg);
  console.log(arg2);

}
online(arr1);

// end onclick function
