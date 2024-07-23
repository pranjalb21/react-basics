import React from "react";
import Input from "./Input";
import { IoSwapVertical } from "react-icons/io5";

function CurrencyConverter() {
    return (
        <div className="bg-red-200 w-full h-screen flex flex-col justify-center">
            <h1 className="text-center text-2xl mb-3 font-bold font-mono text-yellow-950">Currency Converter</h1>
            <div className="self-center relative p-6 rounded-md bg-opacity-25 bg-lime-950 shadow-lg flex flex-col gap-3">
                <Input labelText={"From"} currType={"inr"} />
                <Input labelText={"To"} />
                <button className="bg-stone-50 absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full 
                shadow-md border-white border-2">
                    <IoSwapVertical />
                </button>
            </div>
        </div>
    );
}

export default CurrencyConverter;
