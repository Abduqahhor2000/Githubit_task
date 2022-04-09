import React from "react";
import "../scss/Menu.scss";
import { menuIcon, userClockIcon, userSetIcon } from "../svg/svg-icons";

export default function Menu() {
    return (
        <>
            <div className="menu-header">
                <span className="menu-icon">{menuIcon()}</span>
                <span className="brand-name">GMarket</span>
            </div>
            <div className="menu-mean">
                <div className="user-console">
                    <div className="user-header">
                        <span className="set-icon">{userSetIcon()}</span>
                        <span className="user-img"></span>
                        <span className="clock-icon">{userClockIcon()}</span>
                    </div>
                    <div className="user-info">

                    </div>
                </div>
            </div>
        </>
    )
}