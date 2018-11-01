import React from 'react'
import styles from '../styles/main.css';


const SearchBar = (props) => {
  return(
    <div>
      <input className={styles['searchBar']} type="text" placeholder="search user" onChange={props.searchFunc}/>
    </div>
  )
}

export default SearchBar