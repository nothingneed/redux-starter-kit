import React, { PropTypes, Component } from 'react'
import { IndexLink } from 'react-router'


export default class GameDetail extends Component {

	render() {
		console.log(this.props.location.query)
		return(
			<div>Here‘s the GameDetail

			<IndexLink to = '/' > 返回</IndexLink>

			</div>
			)
	}
}

//	<button onClick={() => this.props.history.goBack()}>返回</button> 已不建议使用



//context方法调用goback，备用
// getChildContext() {
//   return { router: this.props.router }
// }
// GameDetail.childContextTypes = {
//     location: React.PropTypes.object
//   },
