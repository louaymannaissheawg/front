import React, { useState } from "react";

import './navbar.css'
import { Link, NavLink } from "react-router-dom";
import Today from "../todaynot/Today";
 const props = () => {


    return (
        <nav>
<Link className="nav-brand"
     to="/" >  <img
    className="img"
    src={require("../../images/kool.jpg")}
    alt="Kool"

/>
</Link>
            <ul className="open">
                <li className='rez'>
                    <NavLink to="/reservations">Manage Reservations</NavLink>
                </li>
                <li className='bel'>
                    <NavLink  aria-readonly><Today/></NavLink>
                </li>
                <li>
                </li>
            </ul>
        </nav>
    );
};

export default props


