

// 2. Query Soundcloud Api

var SoundCloudAPI = {};
//code from api source/javacript

SoundCloudAPI.init=function(){
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
}
SoundCloudAPI.init();

SoundCloudAPI.getTrack= function(inputValue){
SC.get('/tracks', {
  q: inputValue
}).then(function(tracks) {
  console.log(tracks);
  SoundCloudAPI.renderTracks(tracks);
});
}

SoundCloudAPI.getTrack("rilo killey");

SoundCloudAPI.renderTracks= function(tracks){

  tracks.foreach(function(track){

  var card = document.createElement('div');
  card.classList.add("card");

  //
  var imageDiv=document.createElement('div');
  imageDiv.classList.add('image')
  
  var image_img=document.createElement('img');
  image_img.classList.add('image_img');
  image_img.src=track.artwork_url || 'http://lorempixel.com/100/100/abstract/';

   imageDiv.appendChild(image_img);


   //content
   var content=document.createElement('div');
   content.classList.add('content');

   var header=document.createElement('div');
   header.classList.add('header');
   header.innerHTML='<a href=" '+track.permalink_url+ '"target="_blank">' +track.title+ '</a>';

   //button
   var button=document.createElement('div');
   button.classList.add('ui','bottom','attached','button','js-button');

   var icon =document.createElement('i');
   icon.classList.add('add','icon');
  
   var buttonText=document.createElement('span');
   buttonText.innerHTML='Add to Playlist';
   

  //AppendChild
  content.appendChild(header);
  button.appendChild(icon);
  button.appendChild(buttonText);

  card.appendChild(imageDiv);
  card.appendChild(content);
  card.appendChild(button);

  var serarchResult=document.querySelector(".js-search-results");
  
  serarchResult.appendChild(card);
});
}
