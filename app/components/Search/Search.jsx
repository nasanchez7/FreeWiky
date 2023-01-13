"use client"
import styles from '../Search/Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Search = () => {

    return(
        <div className={styles.search}>
            <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
            <input type="text" placeholder='Search...'/>
        </div>
    )
}

export default Search