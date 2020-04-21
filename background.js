'use strict';

function createUrl(text)
{
  const id = text.split('').filter(digit => digit >= '0' && digit <= '9').join('')
  return `https://app.clubhouse.io/jaumo/story/${id}`
}

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    const url = createUrl(text)
    navigate(url)
  }
);
