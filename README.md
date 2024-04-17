# omscs-youtube-scraper

## Kaltura (Canvas) Scraper
Requires Python 3, Pip, and [yt-dlp](https://github.com/yt-dlp/yt-dlp/wiki/Installation)

1. Start playing the Kalutura video and double click to 'View Frame' (this option will not show up if the video is not playing).
Copy the link from the 'View Frame' tab
![How To](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanhjdmIzN2hkcnUxenpvOW01MmZzb3owbG9kNGI2b2hkbW5waXhtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LuO4udr9Urapu6Sy3u/giphy.gif)

2. Run the `canvas_scraper.py` file with the copied link from step 1. This will download a srt file. 

3. Run the `srt_to_text.py` to convert the srt file to a text file. This will create a new text file.


## Youtube Scraper for Edtech Videos
I used this part for Edtech. It hasn't been tested in a while.

Requires Node install: https://nodejs.org/en/download/

1. Run `npm install` to install all dependencies 
2. Get the video ID from the video. In the case of a Youtube video, the ID can be found after the /watch?v= part of the URL. (ex. https://www.youtube.com/watch?v=Apmks_6b584 the video ID for this would be Apmks_6b584) 
3. Edit the `youtube_scraper.js` file. In this file, there is a `vids` array that has a list of video IDs that can be modified.
   NOTE: If you only want to scrape one video, delete all other IDs in the array.
4. Run `node youtube_scraper.js` to run the script. The result of the script will be a file created called Output.txt  


Playlist with Edtech Videos:
https://www.youtube.com/playlist?list=PLAwxTw4SYaPnFwXQaRex_E3xjRvMcIMd1

Playlist with ML4T Videos:
https://www.youtube.com/watch?v=s5xKxliBMTo&list=PLAwxTw4SYaPnIRwl6rad_mYwEk4Gmj7Mx