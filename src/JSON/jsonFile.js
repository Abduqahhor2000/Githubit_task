import {menu_helpIcon, menu_likedIcon, menu_logoutIcon, menu_orderIcon, menu_profilIcon, menu_savedIcon, menu_shopIcon, menu_viwedIcon, menu_walletIcon} from "../svg/svg-icons";
import fruits from "../png/card_fruits.png"
import vegetables from "../png/card_vegetable.png"
import tomato from "../png/card_tomato.png"
import orange from "../png/card_orange.png"
import pasta from "../png/card_orange.png"
import avocados from "../png/avocados.png"
import avocad from "../png/avocad.png"
import lemon from "../png/lemon.png"
import melon from "../png/melon.png"
import kiwi from "../png/kiwi.png"

export const cards = [
    {id: 0, name: "Sale Orange", text: "Promocode down", button: true, buttonText: "ORANGE20", href: "/", img: orange, theme:"rgba(255, 109, 3, 1)"},
    {id: 1, name: "Tomato", text: "Buy at affordable prices", button: false, buttonText: "", href: "/", img: tomato, theme:"rgba(227, 65, 38, 1)"},
    {id: 2, name: "Sale 40%", text: "Very tasty pasta", button: true, buttonText: "FOOD40", href: "/", img: pasta, theme:"rgba(162, 190, 0, 1)"},
    {id: 3, name: "Collection", text: "Sale full Pack", button: true, buttonText: "COLLECT", href: "/", img: vegetables, theme:"rgba(47, 140, 246, 1)"},
    {id: 4, name: "Fruit 25%", text: "Very tasty pasta", button: true, buttonText: "TEST40", href: "/", img: fruits, theme:"rgba(119, 83, 246, 1)"},
    {id: 5, name: "Sale 40%", text: "Very tasty pasta", button: true, buttonText: "FOOD40", href: "/", img: pasta, theme:"rgba(204, 153, 0, 1)"}
];

export const selectMenu = [
    {id: 0, text: "Pantrys", active: false, href:"/"},
    {id: 1, text: "Fruits and Vegetables", active: true, href:"/"},
    {id: 2, text: "Eggs and Dairys", active: false, href:"/"},
    {id: 3, text: "Frozens", active: false, href:"/"},
    {id: 4, text: "Beverange", active: false, href:"/"},
    {id: 5, text: "Snacks", active: false, href:"/"},
    {id: 6, text: "Households", active: false, href:"/"},
];

export const productMenu = [
    {id: 1, text: "Hass Large Avocado", img: avocad, price: "4.90"},
    {id: 2, text: "Zespri Kiwifruit 2 lb", img: kiwi, price: "4.90"},
    {id: 3, text: "Jumbo Cantaloupe", img: melon, price: "10.5"},
    {id: 4, text: "Lemons (Large) 8", img: lemon, price: "3.89"},
    {id: 5, text: "Calavo Hass Avocados", img: avocados, price: "5.99"},
]; 

export const menuItems = [
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

export const history_items = [
    {id: 0, dayAndMooth: "10 October", href: "/", time: "8:00 AM — 9:00 AM"},
    {id: 9, dayAndMooth: "10 October", href: "/", time: "9:00 AM — 10:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "10:00 AM — 11:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "11:00 AM — 12:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "12:00 AM — 13:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "13:00 AM — 14:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "14:00 AM — 15:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "15:00 AM — 16:00 AM"},
    {id: 0, dayAndMooth: "10 October", href: "/", time: "16:00 AM — 17:00 AM"},
]