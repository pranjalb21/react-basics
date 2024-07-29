import React from "react";
import { NavLink } from "react-router-dom";
export default function NavOption({ link, text }) {
    return (
        <div className="align-middle cursor-pointer self-center hover:text-orange-600 duration-200">
            <NavLink className={({isActive})=>isActive?"text-orange-600 underline underline-offset-4 duration-300":""} to={link}>
                <h4>{text}</h4>
            </NavLink>
        </div>
    );
}
