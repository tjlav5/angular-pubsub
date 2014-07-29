var assert = require("assert"),
    sinon = require('sinon');

var pubsub = require('../pubsub');

describe('PubSub', function () {

  var ps;

  beforeEach(function () {
    ps = new pubsub();
  });

  it ('should invoke the callback', function () {
    var spy = sinon.spy();
    ps.subscribe('testEvent', spy);
    ps.publish('testEvent');
    assert(spy.calledOnce);
    ps.publish('testEvent');
    assert(spy.calledTwice);
  });

  it ('should pass cache to callback', function () {
    var spy = sinon.spy();
    ps.subscribe('testEvent', spy);
    ps.publish('testEvent', "HELLO");
    assert(spy.calledWith("HELLO", undefined));
    ps.publish('testEvent', "WORLD");
    assert(spy.calledWith("WORLD", "HELLO"));
  });

  it ('should not invoke the callback if deregistered', function () {
    var spy = sinon.spy();
    var uid = ps.subscribe('testEvent', spy);
    ps.publish('testEvent');
    assert(spy.called);
    spy.reset();
    ps.unsubscribe(uid);
    ps.publish('testEvent');
    assert(!spy.called);
  });

});