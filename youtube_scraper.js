//https://github.com/algolia/youtube-captions-scraper
import { getSubtitles } from 'youtube-captions-scraper';
import { appendFileSync } from "fs";
let vids = [
    'WxYy9A20c54',
    'wnCSVssDPv8',
    'mkYEVWZ6tYI',
    'yAxck_1RYCo',
    '6IVOnxiYhYs',
    '50a0Ai2RXgU',
    'M9Bvrtknm_4',
    'SNJj8B0mGhU',
    'KCcc6oqx6qk',
    'H0d2OHt65OU',
    'CzFXhfRU9L8',
    'VK5b5ZQEI7M',
    'znpIvw-dHO4',
    'HL2cXBeqb6U',
    'H978qKz7H8c',
    'spIpkKYOtnA',
    'eYfCBozP99U',
    'QoID5_JZHFk',
    '-qsiqetMlCg',
    '2tKqSaopvt4',
    'xKxkqzqsePs',
    'b4o_lCg7JOA',
    '9hinEQktxKM',
    'PLuWTvJxtDY',
    'KpX8CQxRLIU',
    'Qht-963q0bk',
    '61BoWH45dWk',
    'APEz9YJ2Sjw',
    'QqF94Jtgbt4',
    'dkjqfaqoCaM',
    'TL293hWKZHU',
    'wdBEU2HzQfY',
    'JKFujZMfObo',
    'Z78ecsa2JD4',
    'kjlAfs5RQXI',
    'WggvWV7dttI',
    'd8U5sfZ8q4U',
    'Qht-963q0bk',
    'eHkNV-7j4DE',
    'Apmks_6b584',
    'CKLkg50SGtc',
    'rDqqcXNsiUI',
    'zxEhhgS6ZNc',
    'YByBeOM59z8',
    'LCqMauBTRuU',
    'dFuOZwvzxow',
    '8_eM0jeD9Nc',
    '66-Pq2o1ze4',
    'XkMi2nc6OB4',
    'lQe18PkBJTA',
    'BzKgCgu4CUs',
    'yJ0DXtB_rX0',
    'Ysn4aHuwGuo', //Introduction to Open Learning
];
/*





subs = [
    {start: 1, end: 10, text: "hello guys"},
    {start: 20, end: 30, text: "i am a lecture"},
    .....
]

newSubs = [
    "hello guys",
    "i am a lecture"
]
 
 */
async function download(ids) {
    for (let i = 0; i < ids.length; i++) {
        console.log("Downloading " + ids[i]);
        let subs = await getSubtitles({
            videoID: ids[i],
            lang: 'en'
        });
        // file will be added to this folder: youtube_scraper
        // file name will be edtech_lecture_subs.txt
        // putting all the captions in one file
        for (let i = 0; i < subs.length; i++) {
            let text = subs[i]["text"];
            text = text.split("\n").map(line => line.trim()).join(" ");
            appendFileSync('Output.txt', text + " ");
        }
    }
}
await download(vids);
//# sourceMappingURL=youtube_scraper.js.map