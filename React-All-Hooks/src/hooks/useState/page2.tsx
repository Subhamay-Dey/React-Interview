"use client";

import React, { useState } from 'react'

function Page2() {

    const [text, setText] = useState("hi");

    const textChange = (event: any) => {
        setText(event.target.value);
    }

  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
            <input className='b-2 ' type="text" placeholder='type here' onChange={textChange}/>
            {text}
        </div>
    </>
  )
}

export default Page2