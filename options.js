// Saves options to chrome.storage
function save_options() {

  var google = document.getElementById('google').checked;
  var fb = document.getElementById('fb').checked;
  var github = document.getElementById('github').checked;
  chrome.storage.sync.set({
    google: google,
    fb: fb,
    github : github

  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click',
    save_options);