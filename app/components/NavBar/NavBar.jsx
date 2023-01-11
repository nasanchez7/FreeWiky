"use client"

import styles from '../NavBar/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faHouse, faList, faGlobe, faFilter} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {

    useEffect(()=>{

    }, [])

    const items = [
        {
            route: "/",
            icon: faHouse,
            name: "Home"
        },
        {
            route: "/categories",
            icon: faList,
            name: "Categories"
        },
        {
            route: "/platforms",
            icon: faGlobe,
            name: "Platform"
        },
        {
            route: "/filter",
            icon: faGlobe,
            name: "Filter"
        }
    ]

return(
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <small>Freegames.</small>
        </div>
        <div className={styles.search}>
            <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
            <input type="text" placeholder='Search...'/>
        </div>
        <ul className={styles.items}>
            {items.map((item, index) =>{
                return(
                <Link href={item.route} className={styles.iconActive}>
                    <FontAwesomeIcon icon={item.icon} />
                    <small>{item.name}</small>
                </Link>
                )
            })}
        </ul>
    </nav>
)
}

export default NavBar;