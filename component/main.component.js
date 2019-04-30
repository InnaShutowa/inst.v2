import React, { Component } from "react";
import style from "../styles/main.css";


const photo = {
    url: 'materials/sova.jpg',
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
console.log(arr);

export class MainComponent extends Component {
    render() {
        return <div className={style.button}>
            <button className={style.buttonUpDown}>↑ по возрастанию</button>
            <button className={style.buttonChange}>перемешать</button>
            <button className={style.buttonUpDown}>↓ по убыванию</button>
            <br/>
            <div className={style.images}>
                {
                    arr.map(photo=>{
                       return <img className={style.image} src={photo} alt={"h"}/>;
                })
                }
            </div>;


        </div>;
    }
}