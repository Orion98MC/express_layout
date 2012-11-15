/*

	Copyright (C) 2012 Thierry Passeron
	
	MIT License

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
	documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
	the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
	and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
	TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
	THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
	CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
	DEALINGS IN THE SOFTWARE.

*/

var 
  http = require('http')
, ejs = require('ejs')
, fs = require('fs')

, layout = 'layout.ejs'
, cached
;

function layoutFn (app) {
  cached = cached || ejs.compile(require('fs').readFileSync([app.get('views'), layout].join('/'), 'utf8'));
  return cached;
}

function render(template, options, cb) {
  var 
    self = this
  , app = this.req.app
  ;

  cb = cb || function (error, result) {
    if (error) { self.send(500, error); }
    else self.send(result);
  };
    
  app.render(template, options || {}, function (error, result) {
    cb(error, layoutFn(app)({ yield: result }));
  });
}

http.ServerResponse.prototype.renderInLayout = render;

exports.render = render;
  
exports.setLayout = function (alayout) { 
  layout = alayout; 
  cached = null;
};