import React, { PropTypes, Component } from 'react'
import styles from './GameItem.css'
import { Link, browserHistory } from 'react-router'
import { Row, Col } from 'antd/lib/layout' //antd栅格系统，css size：32k
import 'antd/lib/layout/style/index.css'


export default class GameItem extends Component {
  render() {
    const { matchId, time, league, teamHost, teamGuest } = this.props
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
        <h5> {(d.getMonth())+'月'+d.getDate()+'日'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()} </h5>
        <Row type="flex" align="middle">
          <Col span={4}> <h5>{league}</h5> </Col>
          <Col span={16}> <h2>{teamHost}  VS  {teamGuest}</h2> </Col>
          <Col span={4}> <Link to = {gotoDetail} activeStyle={{color: 'red'}}>竞猜   </Link>
          </Col>
        </Row>
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

