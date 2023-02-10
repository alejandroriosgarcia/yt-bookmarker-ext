(() => {
    // For accessing the controls and for accessing the player
    let youtubeLeftControls, youtubePlayer;
    // Set currentVideo as a top local variable, left as an empty string
    let currentVideo = "";

    // Adding listener. Have 3 parameters
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        // When a message is sent to contentScript, we can send a response back to where the message is coming from
        const { type, value, videoId } = obj;
        //Destructure the values we're getting (each getting it's own variable)
        if (type === "NEW") {
            // Set currentVideo(a global video in contentScript) to videoId
            currentVideo = videoId;
            // Call a function to handle any actions with newVideo
            newVideoLoaded();
        }
    });


    const newVideoLoaded = () => {
        // Check if there's a bookmark button
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0]

        if (!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");

            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            
        }
    }
})();
