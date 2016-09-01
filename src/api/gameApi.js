/**
 * 模拟客户端-服务器请求
 */
import _catalog from './catalog.json'
import _gamelist from './gameList.json'


const TIMEOUT = 1000

export default {
  getCatalog(cb, timeout) {
    setTimeout(() => cb(_catalog), timeout || TIMEOUT)
  },

  getGameList(payload, cb, timeout) {
    setTimeout(() => cb(_gamelist[payload]), timeout || TIMEOUT)
  }
}
