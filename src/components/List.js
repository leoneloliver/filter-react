import React, {Component} from 'react'
import LoadingHOC from './LoadingHOC'
import styles from '../styles/main.css'


const List = (props) =>{
  const{usernames} = props
  return(
    <ul>
      {usernames.map(
      	user => <li>
      		<img src={user.avatar} className={styles['avatar']}/><br/>{user.name}<br/>{user.email}
      	</li>
      	)}
    </ul>
  )
}

export default LoadingHOC(List)