import React from "react";
import "../scss/Menu.scss";
import { menuItems } from "../JSON/jsonFile";
import { balansPlusIcon,
         mean_nextIcon, 
         menuIcon, 
         shareWalletIcon, 
         userClockIcon, 
         userSetIcon } from "../svg/svg-icons";

export default function Menu({miniMenuActive, setMiniMenuActive}) {
    return (
        <>
                <div className="menu-header">
                    {
                        !miniMenuActive ? <span className="menu-icon">{menuIcon()}</span> :
                                         <span onClick={() => setMiniMenuActive(false)} className="menu-icon">{mean_nextIcon()}</span>
                    }
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
                            <div className="user-name">
                                <span>Roberto Cavanali</span> 
                                <span>(+99893) 100-00-00</span>
                            </div>
                            <div className="user-wallet">
                                <div className="wallet-quality">
                                    <div className="balans">
                                        <span>Wallet balance</span>
                                        <span>$425,97</span>
                                    </div>
                                    <span>{balansPlusIcon()}</span>
                                </div>
                                <div className="wallet-addres">
                                     <span>{shareWalletIcon()}</span>
                                     <span>Share wallet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-list">
                        <div className="nodistant">
                            {
                                menuItems.map((item, id) => {
                                    if(item.distant){
                                        return null
                                    }
                                    return(
                                        <div key={id} className={`menu-item ${item.active ? "active-menu" : ""}`}>
                                            <span>{item.icon()}</span>
                                            <span>{item.itemName}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="distant">
                            {
                                menuItems.map((item, id) => {
                                    if(!item.distant){
                                        return null
                                    }
                                    return(
                                        <>
                                            <span className="line"></span>
                                            <div key={id} className={`menu-item ${item.active ? "active-menu" : ""}`}>
                                                <span>{item.icon()}</span>
                                                <span>{item.itemName}</span>
                                                <span>{`>`}</span>
                                            </div>
                                        </>
                                       
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}