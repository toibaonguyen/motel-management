import Script from "next/script";
import React, {useEffect} from "react";
import Link from "next/link";
export default function Top(props) {

    const myFunction = (x) => {
        x.classList.toggle("change");
    };

    useEffect(() =>{
        const handleClickOutSideNavVertical = (Event) => {
            const navVertical = document.getElementById('nav-vertical');
            const header = document.getElementById('header');
            const navMenu = document.querySelector('.nav-menu');

            if( header.classList.contains('change') && !navVertical.contains(Event.target) 
                && !navMenu.contains(Event.target)){
                header.classList.remove('change');
            }
        }


        document.addEventListener("click", handleClickOutSideNavVertical);
        return () => {
            document.removeEventListener("click", handleClickOutSideNavVertical);
        }
    }, []);



    return (
        <div className="header" id="header">
            <div className="left-header">
               <Link href="/" passHref>
                    <img className="logo-image" src="/images/Layout/Header/motel-manager.png" alt="" />
               </Link>
            </div>
            <div className="center-header">
                <div className="nav-header">
                    <div className={ props.page === 'Home' ?  "nav-item in-page" : "nav-item"}>Home</div>
                    <div className={ props.page === 'Rooms' ?  "nav-item in-page" : "nav-item"}>Rooms</div>
                    <div className={ props.page === 'Contact' ?  "nav-item in-page" : "nav-item"}>Contact</div>
                </div>
                <div className="nav-menu" onClick={() => myFunction(document.getElementById('header'))}>
                    <img className="nav-menu-icon" src="/images/Layout/Header/menu.png" />
                </div>

                <div className="nav-vertical" id="nav-vertical">
                    <div className={ props.page === 'Home' ?  "nav-vertical-item in-page" :  "nav-vertical-item" }>Home</div>
                    <div className={ props.page === 'Rooms' ?  "nav-vertical-item in-page"  : "nav-vertical-item"}>Rooms</div>
                    <div className={ props.page === 'Contact' ?  "nav-vertical-item in-page" : "nav-vertical-item"}>Contact</div>
                    <img src="/images/Layout/Header/x-icon.svg" className="nav-vertical-quit-icon"
                        onClick={() => myFunction(document.getElementById('header'))} />
                </div>
            </div>
            <div className="right-header">
                <div>Hotline:</div>
                <div className="hotline">+32-80000-80000</div>
            </div>
        </div>
    );
}
