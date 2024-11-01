"use client"
import { useState } from "react";

export default function ThreeButtonFatec(){
    const [currentColor ,setColor] = useState("red")

    return(
        <div style={{backgroundColor: currentColor}}>
            <button className="bg-red-600 m-3 p-2" onClick={()=>setColor("red")}>
                Red
            </button>
            <button className="bg-green-600 m-3 p-2" onClick={()=>setColor("green")}>
                Green
            </button>
            <button className="bg-blue-600 m-3 p-2" onClick={()=>setColor("blue")}>
                Blue
            </button>
        </div>
    )
}
