import React, { PropTypes, Component } from 'react'
import styles from './GameItem.css'
import { Link, browserHistory } from 'react-router'

export default class GameItem extends Component {
  render() {
    const { matchId, time, league, teamHost, teamGuest} = this.props
    let d = new Date(time)
    let gotoDetail = {
      pathname:'/gameDetail/',
      query: {
        id:matchId,
        dev:'ios'
      }
    }
    return(
      <div className = {styles.gameItem}>
        <h5>{(d.getMonth())+'月'+d.getDate()+'日'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()}</h5>
        <h2>{league}</h2>
        <h2>{teamHost}  VS  {teamGuest}</h2>
        <Link to = {gotoDetail} activeStyle={{color: 'red'}}>竞猜   </Link>

        <hr />
      </div>
    )
  }
}
//   <button onClick={() => browserHistory.push('/gameDetail/2')}>竞猜-此方法用于react组件外的导航</button> 

GameItem.propTypes = {
  time:PropTypes.number,
  league:PropTypes.string,
  team_host:PropTypes.string,
  team_guest:PropTypes.string,
}
 
