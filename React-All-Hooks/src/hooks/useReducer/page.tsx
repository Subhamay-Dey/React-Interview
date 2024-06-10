"use client";

import React, { useReducer } from "react";

const reducer = (state: any, action: { type: any; }) => {
    switch(action.type) {
        case "INCREMENT" : 
            return {count: state.count + 1, text : state.text};
        
        case "TextChange" : 
            return {count: state.count, text : !state.text};
        
        default : 
            return state;
    }
};

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, {count: 0, text: true});

    return (
        <div className="w-full h-screen flex justify-center items-center">

            {state.count}
            
            <button className="p-2 b-1 bg-black text-white m-2 rounded-md" onClick={() => {
                dispatch({type:"INCREMENT"});
                dispatch({type: "TextChange"})    
            }}>Click me</button>
            {state.text && "this is a line"}
        </div>
    )
}

export default UseReducer;