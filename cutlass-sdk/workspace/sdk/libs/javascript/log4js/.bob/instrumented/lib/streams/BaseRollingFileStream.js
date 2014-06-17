/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['streams/BaseRollingFileStream.js']) {
  _$jscoverage['streams/BaseRollingFileStream.js'] = [];
  _$jscoverage['streams/BaseRollingFileStream.js'][1] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][2] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][8] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][9] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][11] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][14] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][16] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][17] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][18] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][19] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][20] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][22] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][23] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][24] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][25] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][29] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][32] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][33] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][34] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][38] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][39] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][40] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][41] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][42] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][44] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][46] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][47] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][48] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][49] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][50] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][51] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][54] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][56] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][57] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][58] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][60] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][64] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][65] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][66] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][67] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][68] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][72] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][73] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][74] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][77] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][78] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][81] = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][82] = 0;
}
_$jscoverage['streams/BaseRollingFileStream.js'][1]++;
"use strict";
_$jscoverage['streams/BaseRollingFileStream.js'][2]++;
var fs = require("fs"), stream, debug = require("../debug")("BaseRollingFileStream"), util = require("util"), semver = require("semver");
_$jscoverage['streams/BaseRollingFileStream.js'][8]++;
if (semver.satisfies(process.version, ">=0.10.0")) {
  _$jscoverage['streams/BaseRollingFileStream.js'][9]++;
  stream = require("stream");
}
else {
  _$jscoverage['streams/BaseRollingFileStream.js'][11]++;
  stream = require("readable-stream");
}
_$jscoverage['streams/BaseRollingFileStream.js'][14]++;
module.exports = BaseRollingFileStream;
_$jscoverage['streams/BaseRollingFileStream.js'][16]++;
function BaseRollingFileStream(filename, options) {
  _$jscoverage['streams/BaseRollingFileStream.js'][17]++;
  debug("In BaseRollingFileStream");
  _$jscoverage['streams/BaseRollingFileStream.js'][18]++;
  this.filename = filename;
  _$jscoverage['streams/BaseRollingFileStream.js'][19]++;
  this.options = options || {encoding: "utf8", mode: parseInt("0644", 8), flags: "a"};
  _$jscoverage['streams/BaseRollingFileStream.js'][20]++;
  this.currentSize = 0;
  _$jscoverage['streams/BaseRollingFileStream.js'][22]++;
  function currentFileSize(file) {
    _$jscoverage['streams/BaseRollingFileStream.js'][23]++;
    var fileSize = 0;
    _$jscoverage['streams/BaseRollingFileStream.js'][24]++;
    try {
      _$jscoverage['streams/BaseRollingFileStream.js'][25]++;
      fileSize = fs.statSync(file).size;
    }
    catch (e) {
    }
    _$jscoverage['streams/BaseRollingFileStream.js'][29]++;
    return fileSize;
}
  _$jscoverage['streams/BaseRollingFileStream.js'][32]++;
  function throwErrorIfArgumentsAreNotValid() {
    _$jscoverage['streams/BaseRollingFileStream.js'][33]++;
    if (! filename) {
      _$jscoverage['streams/BaseRollingFileStream.js'][34]++;
      throw new Error("You must specify a filename");
    }
}
  _$jscoverage['streams/BaseRollingFileStream.js'][38]++;
  throwErrorIfArgumentsAreNotValid();
  _$jscoverage['streams/BaseRollingFileStream.js'][39]++;
  debug("Calling BaseRollingFileStream.super");
  _$jscoverage['streams/BaseRollingFileStream.js'][40]++;
  BaseRollingFileStream.super_.call(this);
  _$jscoverage['streams/BaseRollingFileStream.js'][41]++;
  this.openTheStream();
  _$jscoverage['streams/BaseRollingFileStream.js'][42]++;
  this.currentSize = currentFileSize(this.filename);
}
_$jscoverage['streams/BaseRollingFileStream.js'][44]++;
util.inherits(BaseRollingFileStream, stream.Writable);
_$jscoverage['streams/BaseRollingFileStream.js'][46]++;
BaseRollingFileStream.prototype._write = (function (chunk, encoding, callback) {
  _$jscoverage['streams/BaseRollingFileStream.js'][47]++;
  var that = this;
  _$jscoverage['streams/BaseRollingFileStream.js'][48]++;
  function writeTheChunk() {
    _$jscoverage['streams/BaseRollingFileStream.js'][49]++;
    debug("writing the chunk to the underlying stream");
    _$jscoverage['streams/BaseRollingFileStream.js'][50]++;
    that.currentSize += chunk.length;
    _$jscoverage['streams/BaseRollingFileStream.js'][51]++;
    that.theStream.write(chunk, encoding, callback);
}
  _$jscoverage['streams/BaseRollingFileStream.js'][54]++;
  debug("in _write");
  _$jscoverage['streams/BaseRollingFileStream.js'][56]++;
  if (this.shouldRoll()) {
    _$jscoverage['streams/BaseRollingFileStream.js'][57]++;
    this.currentSize = 0;
    _$jscoverage['streams/BaseRollingFileStream.js'][58]++;
    this.roll(this.filename, writeTheChunk);
  }
  else {
    _$jscoverage['streams/BaseRollingFileStream.js'][60]++;
    writeTheChunk();
  }
});
_$jscoverage['streams/BaseRollingFileStream.js'][64]++;
BaseRollingFileStream.prototype.openTheStream = (function (cb) {
  _$jscoverage['streams/BaseRollingFileStream.js'][65]++;
  debug("opening the underlying stream");
  _$jscoverage['streams/BaseRollingFileStream.js'][66]++;
  this.theStream = fs.createWriteStream(this.filename, this.options);
  _$jscoverage['streams/BaseRollingFileStream.js'][67]++;
  if (cb) {
    _$jscoverage['streams/BaseRollingFileStream.js'][68]++;
    this.theStream.on("open", cb);
  }
});
_$jscoverage['streams/BaseRollingFileStream.js'][72]++;
BaseRollingFileStream.prototype.closeTheStream = (function (cb) {
  _$jscoverage['streams/BaseRollingFileStream.js'][73]++;
  debug("closing the underlying stream");
  _$jscoverage['streams/BaseRollingFileStream.js'][74]++;
  this.theStream.end(cb);
});
_$jscoverage['streams/BaseRollingFileStream.js'][77]++;
BaseRollingFileStream.prototype.shouldRoll = (function () {
  _$jscoverage['streams/BaseRollingFileStream.js'][78]++;
  return false;
});
_$jscoverage['streams/BaseRollingFileStream.js'][81]++;
BaseRollingFileStream.prototype.roll = (function (filename, callback) {
  _$jscoverage['streams/BaseRollingFileStream.js'][82]++;
  callback();
});
_$jscoverage['streams/BaseRollingFileStream.js'].source = ["\"use strict\";","var fs = require('fs')",", stream",", debug = require('../debug')('BaseRollingFileStream')",", util = require('util')",", semver = require('semver');","","if (semver.satisfies(process.version, '&gt;=0.10.0')) {","  stream = require('stream');","} else {","  stream = require('readable-stream');","}","","module.exports = BaseRollingFileStream;","","function BaseRollingFileStream(filename, options) {","  debug(\"In BaseRollingFileStream\");","  this.filename = filename;","  this.options = options || { encoding: 'utf8', mode: parseInt('0644', 8), flags: 'a' };","  this.currentSize = 0;","  ","  function currentFileSize(file) {","    var fileSize = 0;","    try {","      fileSize = fs.statSync(file).size;","    } catch (e) {","      // file does not exist","    }","    return fileSize;","  }","","  function throwErrorIfArgumentsAreNotValid() {","    if (!filename) {","      throw new Error(\"You must specify a filename\");","    }","  }","","  throwErrorIfArgumentsAreNotValid();","  debug(\"Calling BaseRollingFileStream.super\");","  BaseRollingFileStream.super_.call(this);","  this.openTheStream();","  this.currentSize = currentFileSize(this.filename);","}","util.inherits(BaseRollingFileStream, stream.Writable);","","BaseRollingFileStream.prototype._write = function(chunk, encoding, callback) {","  var that = this;","  function writeTheChunk() {","    debug(\"writing the chunk to the underlying stream\");","    that.currentSize += chunk.length;","    that.theStream.write(chunk, encoding, callback);","  }","","  debug(\"in _write\");","","  if (this.shouldRoll()) {","    this.currentSize = 0;","    this.roll(this.filename, writeTheChunk);","  } else {","    writeTheChunk();","  }","};","","BaseRollingFileStream.prototype.openTheStream = function(cb) {","  debug(\"opening the underlying stream\");","  this.theStream = fs.createWriteStream(this.filename, this.options);","  if (cb) {","    this.theStream.on(\"open\", cb);","  }","};","","BaseRollingFileStream.prototype.closeTheStream = function(cb) {","  debug(\"closing the underlying stream\");","  this.theStream.end(cb);","};","","BaseRollingFileStream.prototype.shouldRoll = function() {","  return false; // default behaviour is never to roll","};","","BaseRollingFileStream.prototype.roll = function(filename, callback) {","  callback(); // default behaviour is not to do anything","};",""];