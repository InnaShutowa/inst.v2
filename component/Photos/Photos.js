import React, { Component } from "react";
import style from "./styles.css";
import AboutPhotoComponent from "../AboutPhotoComponent/AboutPhotoComponent";
import * as store from "react-redux";

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


localStorage.clear();

localStorage.setItem("1", JSON.stringify(photo));
localStorage.setItem("2", JSON.stringify(photo1));
localStorage.setItem("3", JSON.stringify(photo3));
localStorage.setItem("4", JSON.stringify(photo4));
localStorage.setItem("5", JSON.stringify(photo2));


const obj = Object.values(localStorage);
let arr = [];
let littleArr = [];
let i = 0;
console.log(obj);

obj.map(ph=>{
    if (i<3){
        littleArr.push(JSON.parse(ph));
        i++;
        console.log(i);
        console.log("cell");
    } else{
        i=0;
        arr.push(littleArr);

        littleArr = [];
        littleArr.push(JSON.parse(ph));
        console.log("row");
    }
});
if (littleArr.length!==0){
    arr.push(littleArr);
}



console.log(arr);

const Photos = <div className={style.table}> {
    arr.map(little=>(
        <div className={style.row} >
            {
                little.map(photo=> (
                    <div className={style.cell} >
                        <img className={style.image} src={photo.url} alt={"photo"}/>
                        <AboutPhotoComponent name={photo.name} likes={photo.likes}/>
                    </div>
                ))
            }
        </div>
    ))
}
</div>;



export default Photos;