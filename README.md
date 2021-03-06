## Description

expressjs simple layout addon for expressjs 3+

## Usage
```js
require('express_layout');
    
/* ...somewhere in your controller code... */

  res.renderInLayout('users', {accounts: accounts}); // renders the 'users' view within the default layout ('layout')
```

If you wish you can even replace the res.render by the layout render:

```js
var express_layout = require('express_layout');
    
/* declare a middleware */

app.use(function (req, res, next) {
  res.render = express_layout.render.bind(res);
  next();
});

/* ...somewhere in your controller code... */

  res.render('users', {accounts: accounts}); // renders the 'users' view within the default layout ('layout')
```


## Defaults

  * The default layout is 'layout'
  
Layouts must reside in a path that is resolved by express like any other view.
    
## Settings
You can set the global layout with setLayout():

```js
require('express_layout').setLayout('MyLayout.ejs');
```

Or, you can use a specific layout by setting the layout option:

```js
res.renderInLayout('users', {
  layout: 'UsersLayout', 
  accounts: accounts
});
```

Or, you can use a specific layout by setting the res.layout:

```js
res.layout = 'UsersLayout';
res.renderInLayout('users', {
  accounts: accounts
});
```

Options are passed to the layout and the template as well.
  
## Yield

The layout is assumed to have a "yield" local, where the view's content will be nested

Layout example in ejs format:
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