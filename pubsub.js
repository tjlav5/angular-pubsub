"use strict";

var _ = require('lodash');

var PubSub = function (config) {
  config = config || {};
  this.evCache = {};
  this.cbCache = {};

  this.debug = config.debug || false;
};

PubSub.prototype.publish = function(eventName, data) {
  if (this.debug) { console.log('PUBLISH', eventName, data); }

  this.evCache[eventName] = this.evCache[eventName] || {
    cache: undefined,
    uids: []
  };
  
  _.forEach(this.evCache[eventName].uids, function (uid) {
    this.cbCache[uid].fn(data, this.evCache[eventName].cache)
  }.bind(this));
    
  this.evCache[eventName].cache = data;

};

PubSub.prototype.subscribe = function(eventName, callback) {
  if (this.debug) { console.log('SUBSCRIBE', eventName, callback); }

  if (!(eventName && callback)) {
    throw new Error();
  }

  var uid = _.uniqueId(eventName);

  this.evCache[eventName] = this.evCache[eventName] || {
    cache: undefined,
    uids: []
  };
  this.evCache[eventName].uids.push(uid);
  this.cbCache[uid] = {fn: callback, eventName: eventName};

  return uid;

};

PubSub.prototype.unsubscribe = function(uid) {
  if (this.debug) { console.log('UNSUBSCRIBE', uid); }

  if (!uid) {
    throw new Error();
  }

  var eventName = this.cbCache[uid] && this.cbCache[uid].eventName;

  this.evCache[eventName].uids = _.reject(this.evCache[eventName].uids, function (_uid) {
    return _uid === uid;
  });
  delete this.cbCache[uid];

};

PubSub.prototype.getCache = function(eventName) {
  if (this.debug) { console.log('GETCACHE', eventName); }

  if (!eventName) {
    throw new Error();
  }

  return this.evCache[eventName] && this.evCache[eventName].cache;

};

module.exports = new PubSub();
