import React from "react";
import { mean_dateIcon, mean_deliveryIcon, mean_dottedIcon, mean_infoIcon, mean_locationIcon, mean_loc_selectIcon, mean_nextIcon, mean_recipesIcon, mean_salesIcon, mean_savedIcon, mean_searchIcon, mean_searchSettingIcon, mean_setIcon, mean_shopIcon, mean_starIcon } from "../svg/svg-icons";
import "../scss/Mean.scss"
import banner_logo from "../png/banner_logo.png"
import fruits from "../png/card_fruits.png"
import vegetables from "../png/card_vegetable.png"
import tomato from "../png/card_tomato.png"
import orange from "../png/card_orange.png"
import pasta from "../png/card_orange.png"

const cards = [
    {id: 0, name: "Sale Orange", text: "Promocode down", button: true, buttonText: "ORANGE20", href: "/", img: orange, theme:"rgba(255, 109, 3, 1)"},
    {id: 1, name: "Tomato", text: "Buy at affordable prices", button: false, buttonText: "", href: "/", img: tomato, theme:"rgba(227, 65, 38, 1)"},
    {id: 2, name: "Sale 40%", text: "Very tasty pasta", button: true, buttonText: "FOOD40", href: "/", img: pasta, theme:"rgba(162, 190, 0, 1)"},
    {id: 3, name: "Collection", text: "Sale full Pack", button: true, buttonText: "COLLECT", href: "/", img: vegetables, theme:"rgba(47, 140, 246, 1)"},
    {id: 4, name: "Fruit 25%", text: "Very tasty pasta", button: true, buttonText: "TEST40", href: "/", img: fruits, theme:"rgba(119, 83, 246, 1)"},
    {id: 5, name: "Sale 40%", text: "Very tasty pasta", button: true, buttonText: "FOOD40", href: "/", img: pasta, theme:"rgba(204, 153, 0, 1)"}
];

const selectMenu = [
    {id: 0, text: "Pantrys", active: false, href:"/"},
    {id: 1, text: "Fruits and Vegetables", active: true, href:"/"},
    {id: 2, text: "Eggs and Dairys", active: false, href:"/"},
    {id: 3, text: "Frozens", active: false, href:"/"},
    {id: 4, text: "Beverange", active: false, href:"/"},
    {id: 5, text: "Snacks", active: false, href:"/"},
    {id: 6, text: "Households", active: false, href:"/"},
]

export default function Mean() {
    return (
        <>
            <div className="mean-header">
                <div className="next-icon">
                    <span>{mean_nextIcon()}</span>
                </div>
                <div className="location">
                    <span>{mean_locationIcon()}</span>
                    <span>2972 Westheimer Rd. Santa Ana</span>
                    <span>{mean_loc_selectIcon()}</span>
                </div>
                <div className="mean_search">
                    <span>{mean_searchIcon()}</span>
                    <input
                        type="text"
                        placeholder="Search products in Wallmart"
                    />
                    <span>{mean_searchSettingIcon()}</span>
                </div>
                <div className="mean_date">
                    <div>
                        <span>{mean_dateIcon()}</span>
                        <span>By 09:00 — 23:00</span>
                    </div>
                </div>
                <div className="mean-sales">
                    <span>{mean_salesIcon()}</span>
                    <span>$230.80</span>
                </div>
            </div>
            <div className="mean-banner">
                <div className="banner-big">
                    <div className="banner-img"></div>
                    <div className="banner-text">
                        <div className="banner-logo"> <div style={{"backgroundImage" : `url(${banner_logo})`}}></div></div>
                        <div className="text-row">

                            <span>Wallmart store</span> 

                            <span>{mean_dottedIcon()}</span>
                            
                            <span>
                                <span>{mean_infoIcon()}</span>
                                <span>Store info</span>
                            </span>

                            <span>{mean_dottedIcon()}</span>

                            <span>
                                <span>{mean_deliveryIcon()}</span>
                                <span>Store delivery time</span>
                            </span>

                            <span>{mean_dottedIcon()}</span>

                            <span>
                                <span>{mean_savedIcon()}</span>
                                <span>Saved</span>
                            </span>
                        </div>
                        <span className="star-icon">
                            <span>{mean_starIcon()}</span>
                            <span>4.5</span>
                        </span>
                    </div>
                </div>
                <div className="banner-mini">
                        <div className="shop">
                            <span>{mean_shopIcon()}</span>
                            <span>Shop</span>
                        </div>
                        <div className="recipes">
                            <span>{mean_recipesIcon()}</span>
                            <span>Recipes</span>
                        </div>
                </div>
            </div>
            <div className="mean-cards">
                {
                    cards.map((item, id) => {
                        return(
                            <>
                                <div className="card" style={{"backgroundColor" : `${item.theme}`, "boxShadow" : `0px 50px 50px -50px ${item.theme}`}} key={id}>
                                    <div className="card-title">
                                        <span>{item.name}</span>
                                        <span>{item.text}</span>
                                    </div>
                                    {
                                        item.button ? <span className="card-button" style={{"color": `${item.theme}`}}>{item.buttonText}</span> : null
                                    } 
                                    <div className="card-img" style={{"backgroundImage" : `url(${item.img})`}}></div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="fruit-select">
                <div className="select-menu">
                    <div className="setSelect">{mean_setIcon()}</div>
                    {
                        selectMenu.map((item ,id) => {
                            return(
                                <>
                                    <div key={id} className={`menu-item ${ item.active ? "select-active" : ""}`}>{item.text}</div>
                                </>
                            )
                        })
                    }
                    <div className="selectMore">More {mean_loc_selectIcon()}</div>
                </div>
                <div className="selected-product">
                   
                </div>
            </div>
        </>
    )
}