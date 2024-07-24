import React, { useEffect, useState } from "react";
import Input from "./Input";
import { IoSwapVertical } from "react-icons/io5";

function CurrencyConverter() {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [fromAmount, setFromAmount] = useState();
    const [toAmount, setToAmount] = useState();
    const [data, setData] = useState([]);

    const fetchRate = (currency) => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((resJS) => setData(resJS.rates));
    };

    const convert = () => {
        fromAmount && setToAmount(data[toCurrency] * Number(fromAmount));
        !fromAmount && setToAmount(0);
    };

    const swap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    };

    useEffect(() => {
        fetchRate(fromCurrency);
    }, [fromCurrency]);
    return (
        <div className="bg-red-200 w-full h-screen flex flex-col justify-center">
            <h1 className="text-center text-2xl mb-3 font-bold font-mono text-yellow-950">
                Currency Converter
            </h1>
            <div className="self-center relative p-6 rounded-md bg-opacity-25 bg-lime-950 shadow-lg flex flex-col gap-3">
                <div className="self-center relative rounded-md bg-opacity-25 flex flex-col gap-3">
                    <Input
                        labelText={"From"}
                        setCurrency={setFromCurrency}
                        currency={fromCurrency}
                        amount={fromAmount}
                        setAmount={setFromAmount}
                        options={[...Object.keys(data),fromCurrency]}
                    />
                    <Input
                        labelText={"To"}
                        setCurrency={setToCurrency}
                        currency={toCurrency}
                        amount={toAmount}
                        setAmount={setToAmount}
                        options={Object.keys(data)}
                    />
                    <button
                        className="bg-stone-50 absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full
                shadow-md border-gray-400 border-2 active:rotate-360 duration-200 "
                        onClick={swap}
                    >
                        <IoSwapVertical />
                    </button>
                </div>
                <button
                    className="bg-green-900 text-white py-3 rounded-md shadow-sm active:translate-y-0.5"
                    onClick={convert}
                >
                    Convert {fromCurrency} to {toCurrency}
                </button>
            </div>
        </div>
    );
}

export default CurrencyConverter;
