## Description

expressjs / ejs simple layout addon for expressjs 3+

## Usage
```js
require('express_ejs_layout');
    
/* ...somewhere in your controller code... */

  res.renderInLayout('users', {accounts: accounts}); // renders the 'users' view within the default layout ('layout.ejs')
```

## Defaults
  * The default layout is 'layout.ejs'
  * Layouts are assumed to be located in app.get('views')
    
## Settings
You can set the layout with setLayout():

```js
require('express_ejs_layout').setLayout('MyLayout.ejs');
```
  
## Yield

The layout is assumed to have a "yield" local, where the view content will be nested

Layout example:
```html
<html>
<body>
  <%- yield %>
</body>
</html>
```

## License terms

Copyright (c), 2012 Thierry Passeron

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.