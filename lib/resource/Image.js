/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
/*jslint proto:true*/

var inherits = require('util').inherits;
var Resource = require('./Resource');


/**
 * Resource for *.png, *.jpg, *.gif files
 * @extends {Resource}
 * @class
 * @param {String} path path of the resource
 */
function Image(path) {
  this.path = path;
  this.id = null;
}
inherits(Image, Resource);
Image.__proto__ = Resource;

Image.prototype.width = 0;
Image.prototype.height = 0;
Image.prototype.type = 'Image';
Image.prototype.version = '0.1';


module.exports = Image;