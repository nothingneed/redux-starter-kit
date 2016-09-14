import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navigator from 'Navigator'
import GameListContainer from './GameListContainer'
import Footer from 'Footer'

import { switchCatalogById,getGameListIfNeeded} from '../actions'


class Game extends Component {

  handleSwitchCatalog(curCatalogID) {
      this.props.switchCatalogById(curCatalogID)
      this.props.getGameListIfNeeded().then(() =>
      console.log('handleSwitchCatalog promise resolved'))
  }


  render() {
    const { catalog ,catalogFilter} = this.props
    return (
      <div>
       <Navigator catalog = {catalog}
       curCatalogID = {catalogFilter}
       onSwitchCatalog={(id) => this.handleSwitchCatalog(id)}
       />
       <br/>
       <GameListContainer />

       <Footer />
      </div>
    )
  }
}


// Note: https://github.com/faassen/reselect 提供了此步骤性能优化的范例
function mapStateToProps(state) {
 return {
   catalog: state.catalog,
   catalogFilter: state.catalogFilter,

 }
}

//避免显式调用dispatch
//如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，而且这个对象会与 Redux store 绑定在一起，
//其中所定义的方法名将作为属性名，合并到组件的 props中
//将mapDispatchToProps放入connect的写法与目前的写法在效果上是一样的-----待进一步验证
/*
function mapDispatchToProps(dispatch) {
  return {
    switchCatalogById: bindActionCreators(switchCatalogById, dispatch)
  }
}
*/

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
//******只有位于containers中的组件可以使用connect连接

export default connect(
  mapStateToProps,
  {
    switchCatalogById,
    getGameListIfNeeded,
  }
)(Game)








