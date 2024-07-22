import React from "react";

function ColorTag({ bgColor, btnText, textColor, setColor }) {
    return (
        <button
            className="rounded-full px-4 py-1 hover:shadow-lg hover:scale-105 outline-none border-cyan-200 border-2"
            style={{ backgroundColor: `${bgColor}`, color: textColor }}
            onClick={() => setColor(bgColor)}
        >
            {btnText}
        </button>
    );
}

export default ColorTag;
