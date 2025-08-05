import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import "../../styles/Global.css"
import "./layout.css"
import { useState } from "react";

export default function Layout(){
    const [affiche, setAffiche] = useState(false)
    return<div className="Layout">
        <Header affiche={affiche} setAffiche={() =>{
            setAffiche(!affiche)
        }}/>
        <main>{<Outlet/>}</main>
        <Footer/>
    </div>
}