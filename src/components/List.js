import React, {Component} from 'react'
import LoadingHOC from './LoadingHOC'
import '../styles/main.css'

const List = (props) =>{
  const{usernames} = props
  return(
    <ul>
      {usernames.map(user => <li><img src={user.avatar}/>&nbsp;{user.name}</li>)}
    </ul>
  )
}

export default LoadingHOC(List)