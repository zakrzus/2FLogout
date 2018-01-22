document.addEventListener('DOMContentLoaded', function() {
  main();
  unload();
});

var cookiesdomains = [
  {domain: "google.com"},
  {domain: "github.com"},
  {domain: "facebook.com"}
]

function main(){
  try {
    for(i = 0; cookiesdomains.length; i++){
      chrome.cookies.getAll(cookiesdomains[i], function(cookies) {
        for(var i=0; i < cookies.length; i++) {
          console.log(cookies[i]);
          chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
        }
      }); 
      }  
  } catch (error) {}
}


function unload(){
  chrome.windows.getCurrent(function (win) {
    chrome.windows.remove(win.id, function(callback){

    });
  });
}