// Listener that listens to tabs, will listen for an update to tabs
chrome.tabs.onUpdated.addListener((tabId, tab) => {
  // See if there's a tab URL, and if there is, see if it includes youtube.com/watch since that is in every youtube video URL
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    // Grab the value that comes after the watch?v= portion of URL
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    console.log(urlParameters);

    // Send a message to contentScript saying a new video has loaded and this is the videoId(unique value of the URL) of that video
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});