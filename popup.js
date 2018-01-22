

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(null, function(data) {
    google = data.google; 
    github = data.github; 
    fb = data.fb;
  });
  setTimeout(function(){ main(0); }, 100);
  unload();
  
});
var google;
var github;
var fb;

function main(numberOf){
  var cookiesdomains = [
    google ? {domain: "google.com"} : null,
    github ? {domain: "github.com"} : null,
    fb ? {domain: "facebook.com"} : null
  ];
  try {
      chrome.cookies.getAll(cookiesdomains[numberOf], function(cookies) {
        for(var j=0; j < cookies.length; j++) {
          console.log(cookies[j]);
          chrome.cookies.remove({url: "https://" + cookies[j].domain  + cookies[j].path, name: cookies[j].name});
        }
      });
    if(numberOf <= cookiesdomains.length)
    main(numberOf + 1); 
  } catch (error) {
    if(numberOf <= cookiesdomains.length)
    main(numberOf + 1);
  }
}

function unload(){
  chrome.windows.getCurrent(function (win) {
    chrome.windows.remove(win.id);
  });
}