//https://github.com/algolia/youtube-captions-scraper
import { getSubtitles } from 'youtube-captions-scraper';
import {appendFileSync, writeFile} from "fs"; 


let vids = [
    'WxYy9A20c54', //Intro to EdTech
    'wnCSVssDPv8', //Readiness Questions 
    'mkYEVWZ6tYI', //An Experiment in Educational Technology
    'yAxck_1RYCo', //Learning Goals
    '6IVOnxiYhYs', //Learning Outcomes
    '50a0Ai2RXgU', //Learning Assessments
    'M9Bvrtknm_4', //What is Educational Technology
    'SNJj8B0mGhU', //The Class Project
    'KCcc6oqx6qk', //The Structure of this Class
    'H0d2OHt65OU', //Mentorship
    'CzFXhfRU9L8', //Course Library
    'VK5b5ZQEI7M', //Let's get started 
    'znpIvw-dHO4', //Introduction to Research
    'HL2cXBeqb6U', //Introduction to Controlled Experiments
    'H978qKz7H8c', //Introduction to Survey Research
    'spIpkKYOtnA', //Introduction to Qualitative Research
    'eYfCBozP99U', //Introduction to Quantitative Research
    'QoID5_JZHFk', //Introduction to Design-Based Research
    '-qsiqetMlCg', //Introduction to Constructism
    '2tKqSaopvt4', //Introduction to Project-Based Learning
    'xKxkqzqsePs', //Project-Based Learning Interview
    'b4o_lCg7JOA', //Introduction to Problem-Based Learning
    '9hinEQktxKM', //Introduction to Communities of Practice
    'PLuWTvJxtDY', //Interview on Student Isolation
    'KpX8CQxRLIU', //Introduction to Social Learning
    'Qht-963q0bk', //Interview on Online Learning
    '61BoWH45dWk', //Introduction to Metacognition
    'APEz9YJ2Sjw', //Interview on Student Motivation
    'QqF94Jtgbt4', //Interview on Metacognition
    'dkjqfaqoCaM', //Interview on Metacognition
    'TL293hWKZHU', //Introduction to Formative Assessment
    'wdBEU2HzQfY', //Introduction to Learning Management Systems
    'JKFujZMfObo', //Introduction to Intelligent Tutoring Systems
    'Z78ecsa2JD4', //Interview on Intellgent Tutoring System
    'kjlAfs5RQXI', //Introduction to Online Learning
    'WggvWV7dttI', //Interview on Online Learning Tairi
    'd8U5sfZ8q4U', //Interview on Online Learning Lauren
    'Qht-963q0bk', //Interview on Online Learning Courtney
    'eHkNV-7j4DE', //Interview on Online Learning Sebastian
    'Apmks_6b584', //Introduction to MOOCs
    'CKLkg50SGtc', //Interview on MOOCs Siya
    'rDqqcXNsiUI', //Introduction to Social Networking
    'zxEhhgS6ZNc', //Introduction to Computer-Supported Collaborative Work
    'YByBeOM59z8', //Introduction to Game-Based Learning
    'LCqMauBTRuU', //Interview on Game-Based Learning Cameron
    'dFuOZwvzxow', //Introduction to Simulation-Based Learning
    '8_eM0jeD9Nc', //Interview on Exploratory Learning Environments David
    '66-Pq2o1ze4', //Introduction to Mobile Devices
    'XkMi2nc6OB4', //Interview on Gender, Technology, and Education Jessica
    'lQe18PkBJTA',//Interview on Gender, Technology, and Education Kathleen
    'BzKgCgu4CUs', //Interview on the Business of Edtech Jason
    'yJ0DXtB_rX0',//Interview on the Business of Edtech Stuart
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
        for(let i = 0; i < subs.length; i++) {
            let text = subs[i]["text"];
            text = text.split("\n").map(line => line.trim()).join(" ");
            appendFileSync('Output.txt', text + " ");
        }
    }
}

await download(vids);