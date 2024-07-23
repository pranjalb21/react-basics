import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [range, setRange] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);

    const passwordRef = useRef();

    const passwordGenerate = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) str += "0123456789";
        if (character) str += `~!@#$%^&*(){}[]:;/?\\`;
        for (let i = 1; i <= range; i++) {
            let index = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(index);
        }
        setPassword(pass);
    }, [range, number, character, setPassword]);

    const copyIntoClipboard = useCallback(() => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    }, [password]);

    useEffect(
        () => passwordGenerate(),
        [range, number, character, setPassword, passwordGenerate]
    );

    return (
        <div className="bg-[#E6E6FA] w-full flex justify-center h-screen text-center">
            <div
                className="flex flex-col bg-slate-400 w-fit h-fit
             mt-5 rounded-lg p-5 shadow-lg"
            >
                <h1 className="text-xl font-bold text-orange-50 font-mono">
                    Password Genarator
                </h1>
                <div className="w-96 flex rounded-lg overflow-hidden shadow-md mb-2 mt-2">
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        readOnly
                        ref={passwordRef}
                        className="w-full outline-none py-1 px-2 font-mono font-medium"
                    />
                    <button
                        onClick={copyIntoClipboard}
                        className="bg-green-600 hover:bg-green-700 text-yellow-50 shrink-0 py-0.5 px-2 font-bold"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    <div>
                        <input
                            type="range"
                            name="range"
                            id="range"
                            min={8}
                            max={15}
                            step={1}
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                            className="align-middle cursor-pointer"
                        />
                        &nbsp;
                        <label htmlFor="range">Length: {range}</label>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                name="number"
                                id="number"
                                checked={number}
                                onChange={() => setNumber(!number)}
                                className="cursor-pointer"
                            />
                            <label htmlFor="number" className="cursor-pointer">
                                Number
                            </label>
                        </div>
                        <div className="flex gap-1">
                            <input
                                type="checkbox"
                                name="character"
                                id="character"
                                checked={character}
                                onChange={() => setCharacter(!character)}
                                className="cursor-pointer"
                            />
                            <label
                                htmlFor="character"
                                className="cursor-pointer"
                            >
                                Character
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
