import React from "react";
import "../scss/Menu.scss";
import { balansPlusIcon, mean_nextIcon, menuIcon, menu_helpIcon, menu_likedIcon, menu_logoutIcon, menu_orderIcon, menu_profilIcon, menu_savedIcon, menu_shopIcon, menu_viwedIcon, menu_walletIcon, shareWalletIcon, userClockIcon, userSetIcon } from "../svg/svg-icons";

const menuItems = [
    { id: 0, distant: false, active: true, href: "/", icon: menu_shopIcon, itemName: "Stores"},
    { id: 1, distant: false, active: false, href: "/", icon: menu_orderIcon, itemName: "Order history"},
    { id: 2, distant: false, active: false, href: "/", icon: menu_savedIcon, itemName: "Saved stores"},
    { id: 3, distant: false, active: false, href: "/", icon: menu_likedIcon, itemName: "Liked products"},
    { id: 4, distant: false, active: false, href: "/", icon: menu_viwedIcon, itemName: "Viwed Products"},
    { id: 5, distant: false, active: false, href: "/", icon: menu_walletIcon, itemName: "Wallet history"},
    { id: 6, distant: false, active: false, href: "/", icon: menu_profilIcon, itemName: "Profil setting"},
    { id: 7, distant: true,  active: false, href: "/", icon: menu_helpIcon, itemName: "Help center"},
    { id: 8, distant: true,  active: false, href: "/", icon: menu_logoutIcon, itemName: "Logout"},
];

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