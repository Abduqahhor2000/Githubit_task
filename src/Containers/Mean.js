import React from "react";
import { mean_dateIcon, mean_deliveryIcon, mean_dottedIcon, mean_infoIcon, mean_locationIcon, mean_loc_selectIcon, mean_nextIcon, mean_recipesIcon, mean_salesIcon, mean_savedIcon, mean_searchIcon, mean_searchSettingIcon, mean_setIcon, mean_shopIcon, mean_starIcon, menuIcon, product_likeIcon, product_prasentIcon } from "../svg/svg-icons";
import "../scss/Mean.scss"
import banner_logo from "../png/banner_logo.png"
import { cards, selectMenu, productMenu } from "../JSON/jsonFile";

export default function Mean({menuActive, setMenuActive, setMiniMenuActive, historyActive, setHistoryActive}) {
    return (
        <>
            <div className={`${!menuActive ? "full-header" : ""} mean-header`}>
                <div className="next-icon" onClick={() => setMenuActive(!menuActive)}>
                    <span className={`${!menuActive ? "next-rotate" : ""}`}>{mean_nextIcon()}</span>
                </div>
                <div className="mini-menu-icon" onClick={() => setMiniMenuActive(true)}>
                    <span>{menuIcon()}</span>
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
                <div onClick={() => setHistoryActive(!historyActive)} className="mean_date">
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
                                <div style={{"backgroundColor" : `${item.theme}`, "boxShadow" : `0px 50px 50px -50px ${item.theme}`}} key={id} className="card">
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
                    <div className="product-header">
                        <span>
                            Fresh Fruit
                        </span>
                        <span>
                            {`See all >`}
                        </span>
                    </div>
                    <div className="product-mean">
                        {
                            productMenu.map((item, id) => {
                                return (
                                    <>
                                        <div className="product-item" key={id}>
                                            <div className="prasent">{product_prasentIcon()}</div>
                                            <div className="product-like">{product_likeIcon()}</div>
                                            <div className="product-img" style={{"backgroundImage" : `url(${item.img})`}}></div>
                                            <div className="product-info">
                                                <div className="product-title">{item.text}</div>
                                                <div className="product-price">
                                                    <span>{`$`}{item.price}</span>
                                                    <span>+</span>
                                                </div>
                                            </div>
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