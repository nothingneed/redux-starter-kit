import chai from 'chai'
import * as types from '../../constants/ActionTypes'
import gameList from '../gameList'
import _gameList from '../../api/gameList.json'

const expect = chai.expect;

describe('测试gameList', () => {
  it('gameList/undefined', () => {
    expect(gameList(undefined,{ type: undefined })
    ).to.be.deep.equal({
      isFetching: false,
      items:[],
      leagueFilter:{}})
    });

  it('gameList/request', () => {
    expect(gameList({},{ type:types.GETGAMELIST_REQUEST })
    ).to.be.deep.equal({
      isFetching: true,
      })
    });

  it('gameList/requestSuccess', () => {
    expect(gameList({isFetching: false, items:[], leagueFilter:{}},
      { type:types.GETGAMELIST_SUCCESS,gameList:_gameList['0'] })
    ).to.be.deep.equal({
      "isFetching": false,
      "items": [
          {
            "id": 0,
            "league": "英超",
            "team_guest": "切尔西",
            "team_host": "阿森纳",
            "time": 1290371638000,
          },
          {
            "id": 1,
            "league": "英超",
            "team_guest": "纽卡斯尔",
            "team_host": "曼城",
            "time": 1290371639000,
          },
          {
            "id": 2,
            "league": "意甲",
            "team_guest": "罗马",
            "team_host": "国际米兰",
            "time": 1290371690000,
          },
        ],
        "leagueFilter": {
          "意甲": "意甲",
          "意甲act": true,
          "英超": "英超",
          "英超act": true,
        },
      })
    });


});
