import React, { Component } from "react";
import style from "./styles.css";

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
localStorage.clear();
localStorage.setItem("1", JSON.stringify(photo));
localStorage.setItem("2", JSON.stringify(photo1));
localStorage.setItem("3", JSON.stringify(photo2));

const obj = Object.values(localStorage);
let arr = [];

obj.map(ph=>{
    arr.push(JSON.parse(ph).url);
});

const Photos = <div className={style.images}> {
    arr.map(photo=>(
        <img className={style.image} src={photo} alt={"h"}/>
    ))
}
</div>;



export default Photos;