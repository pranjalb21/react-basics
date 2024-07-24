import React, { useState } from "react";

function Input({ labelText, setCurrency, currency, amount, options, setAmount }) {
    const handleKeyDown = (e) => {
        if (isNaN(e.key) && e.key !== "Backspace") e.preventDefault();
    };
    return (
        <div className="flex h-fit gap-2 bg-white px-3 py-1 shadow-md rounded-md overflow-hidden">
            <div className="flex flex-col p-1 gap-1">
                <label htmlFor={labelText}>
                    {labelText}
                </label>
                <input
                    type="text"
                    name={labelText}
                    id={labelText}
                    className="outline-none appearance-none"
                    onKeyDown={(e) => handleKeyDown(e)}
                    placeholder="0.00"
                    value={amount}
                    readOnly={labelText==="To"}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label htmlFor={labelText}>Currency type</label>
                <select
                    name={labelText}
                    id={labelText}
                    className="cursor-pointer p-1 rounded-md overflow-hidden outline-none"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {options && options.map((rate,index) => (
                        <option key={index} value={rate}>{rate}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;
