import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function Quote(){
    const [data,setData] = useState(null)
    let [index,setIndex] = useState(1)
    useEffect(()=>{
        const fetchdata = async ()=>{
            const quote = await axios.get("https://type.fit/api/quotes")
            setData(quote.data)
        }
        fetchdata()
        
    },[])
    
    
    const handle =() =>{
        if(data?.length - 1 === index){
            setIndex(0)
        }
        else setIndex(index+1)
    }
   
    return(<>
    <div className="card-q" style={{ backgroundColor: `rgb(${100+index}, ${140+index}, ${120+index})`}}>
    <p className="head-q">{data?.[index]?.text}..!</p>
    <p className="auth-q">- {data?.[index]?.author || "unknown"}</p>
    <div className="butt-b">
        <a href="https://www.instagram.com/" target={"_blank"} className="butt-a">Share</a>
    <button onClick={()=>{
        handle()
    }} className="butt-q">New Quote</button>
    </div>
    </div>
   
    </>)
}

export default Quote
