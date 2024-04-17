import os
import sys
import yt_dlp

def download_subtitles(link, output_dir='.', new_filename=None):
    ydl_opts = {
        'writesubtitles': True,
        'subtitlesformat': 'srt',
        'skip_download': True,
        'outtmpl': f'{output_dir}/%(title)s.%(ext)s'
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([link])
        info_dict = ydl.extract_info(link, download=False)
        title = info_dict.get('title', 'downloaded_subtitle').replace('/', '_')

        if new_filename is None:
            new_filename = f"{title}_subtitles.srt"

        subtitle_path = f"{output_dir}/{title}.srt"
        new_path = f"{output_dir}/{new_filename}"

        if os.path.exists(subtitle_path):
            with open(subtitle_path, 'r', encoding='utf-8') as file:
                subtitles = file.read()
            with open(new_path, 'w', encoding='utf-8') as new_file:
                new_file.write(subtitles)
            print(f"Subtitles copied to new file: {new_path}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        video_url = sys.argv[1]
        download_subtitles(video_url)
    else:
        print("Please provide a URL as an argument.")
