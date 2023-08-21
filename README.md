# omscs-youtube-scraper
1. Run `npm install` to install all dependencies 
2. Get the video ID from the video. In the case of a Youtube video, the ID can be found after the /watch?v= part of the URL. (ex. https://www.youtube.com/watch?v=Apmks_6b584 the video ID for this would be Apmks_6b584) 
3. Edit the `youtube_scraper.js` file. In this file, there is a `vids` array that has a list of video IDs that can be modified.
   NOTE: If you only want to scrape one video, delete all other IDs in the array.
4. Run `node youtube_scraper.js` to run the script. The result of the script will be a file created called Output.txt  

Playlist with Edtech Videos:
https://www.youtube.com/playlist?list=PLAwxTw4SYaPnFwXQaRex_E3xjRvMcIMd1

Playlist with ML4T Videos:
https://www.youtube.com/watch?v=s5xKxliBMTo&list=PLAwxTw4SYaPnIRwl6rad_mYwEk4Gmj7Mx
