import React from 'react'
import c from "./navbar2.module.scss";
import Logo from "../../media/tkani-logo.png"
import { Link } from 'react-router-dom';
import Korzina from "../../media/korzinaicon.png"
import { Tel } from '../footer/network';
import Search from './search';

const Navbar2 = () => {
    return (
        <div className={c.navbar2}>
            <div className={c.navbar2__main}>
                <div className={c.logo}>
                    <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                </div>

                <div className={c.bars}><i className="fa-solid fa-bars"></i></div>

                <Search /> 
                <Tel />

                <div className={c.korzina}><img src={Korzina} alt="korzina img" /></div>
            </div>
        </div>
    )
}

export default Navbar2