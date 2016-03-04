import {expect} from 'chai';
import sinon from 'sinon';

import * as math from './math';
import * as app from './app';

describe('app', () => {

  it('should not mock add', () => {
    expect(app.add3(5)).to.equal(8);
  });

  it('should mock add', () => {
    sinon.stub(math, 'add').returns(5); // it works !!
    expect(app.add3(0)).to.equal(5);
  });

});
