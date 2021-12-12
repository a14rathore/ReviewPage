import React from 'react';
import './cardHolder.css';
import pattern1 from '../assets copy/tick.png';
import pattern2 from '../assets copy/round.png';
import pattern3 from '../assets copy/wiggle.png';
import button1 from '../assets copy/blue-left-arrow.png';
import u1 from "../assets copy/profile-photo-1.png";
import u2 from "../assets copy/profile-photo-2.png";
import u3 from "../assets copy/profile-photo-3.png";
import u4 from "../assets copy/profile-photo-4.png";
import u5 from "../assets copy/profile-photo-5.png";
import Card from './card.js';
import { useState } from 'react';

let l=0;
function Cardholder(props) {
    const data=[
        {
            name: "Frana James",
            role: "User",
            description: "Love using the app. There's a learning curve. But totally worth it.",
            photo: u1,
        },
        {
            name: "Ronald Hubbard",
            role: "User",
            description: "I use the service to meet friends. Satisfied with the work of the program. Recomend for everybody!",
            photo: u2,
        },
        {
            name: "Megan Perez",
            role: "Product analyst",
            description: "A great app that changed my day planning for the better! Now meetings are only in Slated.",
            photo: u3,
        },
        {
            name: "Michelle Hubbard",
            role: "Creative director",
            description: "Awesome! I really like this service because there is nothing superfluous in it.",
            photo: u4,
        },
        {
            name: "Jishnu Choyi",
            role: "Programmer",
            description: "Greatly improved my productivity. Recommended to all my friends.",
            photo: u5,
        },

    ];
    const[c1,setC1]= useState(data[0]);
    const[c2,setC2]= useState(data[1]);
    const[c3,setC3]= useState(data[2]);
    
        const handleLeft = () =>{
            console.log("clicked left");
            if(l>0){
                l--;
               console.log(l);
                setC1(data[l]);
                setC2(data[l+1]);
                setC3(data[l+2]);
    
            }
    
        }
    
     const handleRight = () =>{
        console.log("clicked right");

           if(l<(5-3)){
            l++;
            console.log(l);
            setC1(data[l]);//1//2
            setC2(data[l+1]);//2//3
            setC3(data[l+2]);//3//4
        }
     }


    return (
        <div className="cardholder">
          <Card pattern={pattern1} stylep={"style1"} data={c1}/>
          <Card pattern={pattern2} position={"po"} stylep={"style2"} data={c2}/>
          <div className="btndiv">
          <button onClick={()=>handleLeft()} className="btn"><img className="btnl" src={button1} alt="btn"></img></button>
          <button onClick={()=>handleRight()} className="btn"><img className="btnr" src={button1} alt="btn"></img></button>
          </div>
          <Card pattern={pattern3} stylep={"style3"} data={c3}/>
        </div>
    );
}

export default Cardholder;
