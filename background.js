console.log('YouTube Video Counter background script loaded');

// You can temporarily modify the alarm to test with a shorter interval
chrome.alarms.create('resetCounter', {
  periodInMinutes: 1 // Will reset every minute instead of daily
});
