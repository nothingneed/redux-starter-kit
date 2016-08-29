import React, { Component, PropTypes } from 'react'
import styles from './GameTable.css'


export default class GameTable extends Component {

  render() {
    const {isFetching} = this.props
    let isLoading = isFetching ? 'LOADING...' : ''
    let children = isFetching ? '' : this.props.children
    return (
      <div className={styles.gametable}>
        <h1>{isLoading}</h1>
        {children}
      </div>
    )
  }
}
 
 GameTable.propTypes = {
  isFetching:PropTypes.bool,
}