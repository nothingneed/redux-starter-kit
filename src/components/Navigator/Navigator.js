import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import styles from './Navigator.css'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/index.css'

class Navigator extends Component {

  handleItemClick(id) {
    if (id === id) {
      this.props.onSwitchCatalog(id)
    }
  }


  renderItem(item) {
    const {
      curCatalogID,
    } = this.props
    return (
      <a className={classnames({[styles.selected] : item.id === curCatalogID })}
         style={{ cursor: 'pointer' }}
         onClick = {
           () => this.handleItemClick(item.id)
         }
      >
      {item.name}
      </a>
    )
  }


  render() {
    const {
      catalog,
    } = this.props
    let nodes = catalog.map( //数组类组件需要加入唯一key属性，以优化性能
      item => <li key = {item.id}>
              {this.renderItem(item)}
              </li>
    )
    return (
    <navigator className='navigator'>

      <Button >Primary</Button>
      <Button>Default</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>

      <ul className={styles.navigators} >
          {nodes}
      </ul>
    </navigator>
    )
  }
}


Navigator.propTypes = {
  catalog:PropTypes.array,
  curCatalogID:PropTypes.number,
  onSwitchCatalog: PropTypes.func.isRequired
}

export default Navigator
