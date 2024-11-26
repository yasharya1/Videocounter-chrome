# YouTube Video Counter

## Overview
The YouTube Video Counter is a Chrome extension that tracks the number of YouTube videos you watch daily. It provides a simple and intuitive interface to view and manually adjust the count of videos watched.

## Features
- **Video Tracking**: Automatically increments the count when a new YouTube video is played.
- **Manual Adjustments**: Users can manually increase or decrease the count.
- **Persistent Storage**: The count is stored locally and persists across browser sessions.
- **User-Friendly Popup**: A clean and easy-to-use popup interface to view the count.
- **Floating Window (Optional)**: The popup can be made draggable for convenience.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/youtube-videocounter.git
   cd youtube-videocounter
   ```

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `youtube-videocounter` directory

## Usage
- Click the extension icon in the Chrome toolbar to open the popup.
- The current count of videos watched will be displayed.
- Use the "+" and "-" buttons to manually adjust the count.
- The count resets daily at midnight.

## Development
### Project Structure