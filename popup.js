document.addEventListener('DOMContentLoaded', function() {
  main();
  
});

var cookies = {
  domain: "google.com",
  domain: "github.com",
  domain: "facebook.com"
}

function main(){
  chrome.cookies.getAll(cookies, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);
      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });   

  chrome.windows.getCurrent(function (win) {
    chrome.windows.remove(win.id, function(callback){

    });
  });

  
}