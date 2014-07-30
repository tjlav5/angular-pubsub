"use strict";

var assert = require("assert"),
    sinon = require('sinon');

describe('PubSub', function () {

  var pubsub;

  beforeEach(function () {
    pubsub = require('../pubsub');
  });

  it ('should invoke the callback', function () {
    var spy = sinon.spy();
    pubsub.subscribe('testEvent', spy);
    pubsub.publish('testEvent');
    assert(spy.calledOnce);
    pubsub.publish('testEvent');
    assert(spy.calledTwice);
  });

  it ('should pass cache to callback', function () {
    var spy = sinon.spy();
    pubsub.subscribe('testEvent', spy);
    pubsub.publish('testEvent', "HELLO");
    assert(spy.calledWith("HELLO", undefined));
    pubsub.publish('testEvent', "WORLD");
    assert(spy.calledWith("WORLD", "HELLO"));
  });

  it ('should not invoke the callback if deregistered', function () {
    var spy = sinon.spy();
    var uid = pubsub.subscribe('testEvent', spy);
    pubsub.publish('testEvent');
    assert(spy.called);
    spy.reset();
    pubsub.unsubscribe(uid);
    pubsub.publish('testEvent');
    assert(!spy.called);
  });

  it ('should throw errors', function () {
    assert.throws(pubsub.subscribe, Error, "Error thrown");
    assert.throws(pubsub.unsubscribe, Error, "Error thrown");
    assert.throws(pubsub.getCache, Error, "Error thrown");
  });

  it ('should get cache', function () {
    pubsub.publish('testEvent', "HELLO");
    assert(pubsub.getCache('testEvent') === "HELLO");
    pubsub.publish('testEvent', "WORLD");
    assert(pubsub.getCache('testEvent') === "WORLD");
  });

});