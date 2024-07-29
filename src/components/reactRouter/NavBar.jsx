import React from "react";
import NavOption from "./NavOption";
import { Link } from "react-router-dom";

export default function NavBar() {
    const navigation = [
        { link: "/", text: "home" },
        { link: "/about", text: "about" },
        { link: "/contact", text: "contact" },
        { link: "/github", text: "github" },
    ];
    return (
        <nav className="w-full flex justify-evenly shadow-md p-2">
            <div className="lowercase">
                <Link to={"/"}>
                    <h1 className="text-2xl font-bold">
                        My <span className="text-orange-700">Logo</span>{" "}
                    </h1>
                </Link>
            </div>
            <div className="flex gap-4 capitalize font-bold font-mono p-2">
                {navigation.map((nav, index) => (
                    <NavOption key={index} text={nav.text} link={nav.link} />
                ))}
            </div>
            <div className="flex gap-3 capitalize font-bold font-mono">
                <NavOption text={"login"} link={"/login"} />
                <button className="bg-red-800 px-3 text-white rounded-md ">
                    Get Started
                </button>
            </div>
        </nav>
    );
}
