import chai from 'chai'
import {
  INIT_CATALOG
} from '../../constants/ActionTypes'
import catalog from '../catalog'
import _catalog from '../../api/catalog.json'

const expect = chai.expect;

describe('测试catalog', () => {

  it('catalog/undefined', () => {
    expect(catalog([], { type: undefined })
    ).to.be.deep.equal([]);
  });
  it('catalog/init', () => {
    expect(catalog([], { type: INIT_CATALOG, catalog: _catalog })
    ).to.be.deep.equal(_catalog);
  });

  // it('todos/get/success', () => {
  //   const newState = todos({ list: 1, loading: true }, { type: 'todos/get/success', payload:2 });
  //   expect(newState).toEqual({
  //     loading: false,
  //     list: 2,
  //   });
  // });

});
