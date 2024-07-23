import React, { useState } from "react";

function Input({ labelText, currType }) {
    const [input, setInput] = useState(0);
    const handleKeyDown = (e)=>{
        console.log(e.key);
        if(isNaN(e.key)&& e.key!=='Backspace')
            e.preventDefault()
    }
    return (
        <div className="flex h-fit gap-2 bg-white px-3 py-1 shadow-md rounded-md overflow-hidden">
            <div className="flex flex-col p-1 gap-1">
                <label htmlFor={labelText} label>
                    {labelText}
                </label>
                <input
                    type="text"
                    name={labelText}
                    id={labelText}
                    className="outline-none appearance-none"
                    onKeyDown={(e)=>handleKeyDown(e)}
                    placeholder="0.00"
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label htmlFor={currType}>Currency type</label>
                <select
                    name={currType}
                    id={currType}
                    className="cursor-pointer p-1 rounded-md overflow-hidden"
                >
                    <option value="inr">INR</option>
                    <option value="usd">USD</option>
                </select>
            </div>
        </div>
    );
}

export default Input;
