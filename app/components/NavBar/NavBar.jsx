"use client"

import styles from '../NavBar/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faList, faGlobe, faFilter, faChevronCircleRight, faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [path, setPath] = useState("/")

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
            icon: faFilter,
            name: "Filter"
        }
    ]

return(
    <nav className={styles.nav}
    style={isOpen ? {width: 15 + "vw"} : {width: 5 + "vw", alignItems: "center"}}
    >
        <div className={styles.logo}>
            {isOpen ? <small>Freegames</small> : ""}
            {isOpen ? <FontAwesomeIcon icon={faChevronCircleLeft} onClick={()=> setIsOpen(!isOpen)}/> :
            <FontAwesomeIcon icon={faChevronCircleRight} onClick={()=> setIsOpen(!isOpen)}/>
            }
        </div>
        
        <ul className={styles.items}>
            {items.map((item, index) =>{
                return(
                <Link href={item.route} className={path === item.route ? styles.iconActive : styles.iconInactive}
                onClick={()=> setPath(item.route)}
                >
                    <FontAwesomeIcon icon={item.icon} />
                    {isOpen ? <small>{item.name}</small> : ""}
                </Link>
                )
            })}
        </ul>
    </nav>
)
}

export default NavBar;