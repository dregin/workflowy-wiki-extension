// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store wiki URL data in the "local" storage area.
//
// Usually we try to store settings in the "sync" area since a lot of the time
// it will be a better user experience for settings to automatically sync
// between browsers.
//
// However, "sync" is expensive with a strict quota (both in storage space and
// bandwidth) so data that may be as large and updated as frequently as the wiki URL/workflowy item IDs
// may not be suitable.
var storage = chrome.storage.local;

// Get at the DOM controls used in the sample.
var resetButton = document.querySelector('button.reset');
var submitButton = document.querySelector('button.submit');
var textarea = document.querySelector('textarea');

// Load wiki URL that may have previously been saved.
loadChanges();

submitButton.addEventListener('click', saveChanges);
resetButton.addEventListener('click', reset);

function saveChanges() {
  // Get the current wiki URL from the form.
  var wiki_url = textarea.value;
  // Check that there's some code there.
  if (!wiki_url) {
    message('Error: No wiki URL specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  storage.set({'wiki_url': wiki_url}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}

function loadChanges() {
  storage.get('wiki_url', function(items) {
    // To avoid checking items.wiki_url we could specify storage.get({wiki_url: ''}) to
    // return a default value of '' if there is no wiki_url value yet.
    if (items.wiki_url) {
      textarea.value = items.wiki_url;
      message('Loaded saved wiki URL.');
    }
  });
}

function reset() {
  // Remove the saved value from storage. storage.clear would achieve the same
  // thing.
  storage.remove('wiki_url', function(items) {
    message('Reset stored wiki URL');
  });
  // Refresh the text area.
  textarea.value = '';
}

function message(msg) {
  var message = document.querySelector('.message');
  message.innerText = msg;
  setTimeout(function() {
    message.innerText = '';
  }, 3000);
}