import React, { Component } from "react";
import style from "./styles.css";
import AboutPhotoComponent from "../AboutPhotoComponent/AboutPhotoComponent";

const photo = {
    url: 'http://localhost:9000/materials/sova.jpg',
    name:"Совень",
    likes:5,
    dislikes:1
};
const photo1 = {
    url: 'http://localhost:9000/materials/pict.jpg',
    name:"Пейзаж",
    likes:4,
    dislikes:2
};
const photo2 = {
    url: 'http://localhost:9000/materials/pictt.jpg',
    name:"Блестелки",
    likes:4,
    dislikes:1
};
const photo3 = {
    url: 'http://localhost:9000/materials/fon.jpg',
    name:"Блестелки",
    likes:4,
    dislikes:1
};
const photo4 = {
    url: 'http://localhost:9000/materials/fon1.jpg',
    name:"Блестелки",
    likes:4,
    dislikes:1
};
const photo5 = {
    url: 'http://localhost:9000/materials/like.jpg',
    name:"Блестелки",
    likes:4,
    dislikes:1
};
const photo6 = {
    url: 'http://localhost:9000/materials/dislike.jpg',
    name:"Блестелки",
    likes:4,
    dislikes:1
};
localStorage.clear();
localStorage.setItem("1", JSON.stringify(photo));
localStorage.setItem("2", JSON.stringify(photo1));
localStorage.setItem("3", JSON.stringify(photo2));

localStorage.setItem("4", JSON.stringify(photo4));
localStorage.setItem("5", JSON.stringify(photo5));
localStorage.setItem("6", JSON.stringify(photo6));

const obj = Object.values(localStorage);
let arr = [];

obj.map(ph=>{
    arr.push(JSON.parse(ph));
});

const Photos = <div className={style.images}> {
    arr.map(photo=>(
                <img className={style.image} src={photo.url} alt={"photo"}/>

    ))

}
</div>;



export default Photos;