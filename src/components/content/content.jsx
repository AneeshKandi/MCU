import React from 'react';
import Card from './card.jsx';

var content=[
    {
        name: "Iron Man",
        src: "https://media1.popsugar-assets.com/files/thumbor/_Rrjw5u5qeqlO8Zznc0TskZB_8k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/04/30/868/n/1922283/1f2e59ed5ae773b06f2879.82877284_/i/Does-Iron-Man-Die-Avengers-Infinity-War.jpg",
        description: "Tony Stark aka Robert Downey Jr. An industrialist, genius inventor, and consummate playboy, he is CEO of Stark Industries and chief weapons",
        linky: "https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"
    },
    {
        name: "Captain America",
        src: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
        description: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
        linky: "https://www.marvel.com/characters/captain-america-steve-rogers"
    },
    {
        name: "Thor",
        src: "https://i.insider.com/5b7acee73cccd122008b45ac?width=700",
        description: "Thor Odinson is the Asgardian God of Thunder, the former king of Asgard and New Asgard, and a founding member of the Avengers.",
        linky: "https://marvelcinematicuniverse.fandom.com/wiki/Thor"
    },
    {
        name: "Hulk",
        src: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg",
        description: "Doctor Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers. Highly respected for his work in biochemistry, nuclear physics, and gamma radiation",
        linky: "https://marvelcinematicuniverse.fandom.com/wiki/Hulk"
    }
]

function con(){
    return(
        <div>
            {content.map( function func(i){ return(<Card name={i.name} description={i.description} src={i.src} linky={i.linky} ></Card>)})}
        </div>
    );
}

export default con;