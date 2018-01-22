document.addEventListener('DOMContentLoaded', function() {
  main(0);
  unload();
});

var cookiesdomains = [
  {domain: "google.com"},
  {domain: "github.com"},
  {domain: "facebook.com"}
]

function main(numberOf){
  try {
      chrome.cookies.getAll(cookiesdomains[numberOf], function(cookies) {
        for(var j=0; j < cookies.length; j++) {
          console.log(cookies[j]);
          chrome.cookies.remove({url: "https://" + cookies[j].domain  + cookies[j].path, name: cookies[j].name});
        }
        if(numberOf <= cookiesdomains.length)
        main(numberOf + 1);
      }); 
  } catch (error) {alert(error)}
}

function unload(){
  chrome.windows.getCurrent(function (win) {
    chrome.windows.remove(win.id);
  });
}