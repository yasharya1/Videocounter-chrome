console.log('YouTube Video Counter content script loaded');

// Listen for video plays
let lastVideoId = '';

function checkForVideoChange() {
    const videoId = new URLSearchParams(window.location.search).get('v');
    
    if (videoId && videoId !== lastVideoId) {
        lastVideoId = videoId;
        chrome.storage.local.get(['count'], function(result) {
            const currentCount = result.count || 0;
            chrome.storage.local.set({
                count: currentCount + 1
            });
        });
    }
}

// Check when URL changes without page reload (YouTube is a SPA)
setInterval(checkForVideoChange, 1000);

// Check on initial page load
checkForVideoChange();
