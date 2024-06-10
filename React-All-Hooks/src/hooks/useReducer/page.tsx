"use client";

import React, { useState } from "react";

function UseReducer() {

    const [number, setNumber] = useState(0);

    const [text, setText] = useState(true);

    function click() {
        setNumber(number + 1);
        setText(!text)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {number}
            <button className="p-2 b-1 bg-black text-white m-2 rounded-md" onClick={click}>Click me</button>
            {text && "hi"}
        </div>
    )
}

export default UseReducer;