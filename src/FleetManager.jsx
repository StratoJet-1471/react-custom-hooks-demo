import React from 'react';
import { Outlet, Link } from "react-router-dom";

export function FleetManager() {
    return (
        <>
        <div className='f-manager__top-navbar'>
            <span className='f-manager__top-nav-description'>SHIPS:</span>
            <nav>
                <Link className="f-manager__top-nav-link" to="/cruiser">Cruiser</Link> |{" "}
                <Link className="f-manager__top-nav-link" to="/destroyer">Destroyer</Link>
            </nav>
        </div>
        <Outlet/>
        </>
    );
  }
  
 