document.addEventListener('DOMContentLoaded', function() {
  console.log("test");
  main();
  
});

function main(){
  chrome.cookies.getAll({domain: "google.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);
      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });   

  chrome.cookies.getAll({domain: "github.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);
      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });   

  chrome.cookies.getAll({domain: "facebook.com"}, function(cookies) {
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