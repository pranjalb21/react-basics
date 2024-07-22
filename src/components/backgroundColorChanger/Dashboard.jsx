import { useState } from "react";
import ColorTag from "./ColorTag";

function Dashboard() {
    const [color, setColor] = useState("white");
    const colors = [
        { bgColor: "#FF0000", textColor: "white", btnText: "Red" },
        { bgColor: "#00FF00", textColor: "black", btnText: "Green" },
        { bgColor: "#0000FF", textColor: "white", btnText: "Blue" },
        { bgColor: "#FFFF00", textColor: "black", btnText: "Yellow" },
        { bgColor: "#000000", textColor: "white", btnText: "Black" },
        { bgColor: "#808080", textColor: "white", btnText: "Grey" },
        { bgColor: "#E6E6FA", textColor: "black", btnText: "Lavender" },
    ];
    return (
        <div className="w-full h-screen" style={{ backgroundColor: color }}>
            <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-2 px-2 ">
                <div className="flex flex-wrap gap-3 bg-white justify-center px-3 py-2 rounded-3xl shadow-lg">
                    {colors.map((color) => (
                        <ColorTag
                            bgColor={color.bgColor}
                            btnText={color.btnText}
                            textColor={color.textColor}
                            setColor={setColor}
                            key={color.bgColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
