# es6-named-imports-rule
A proof of concept showing that named imports in ES6 rule !
```sh
# Clone the repository
git clone https://github.com/antogyn/es6-named-imports-rule.git
# Install dependencies
npm install
# Run tests
npm test
# Transpile to ES5 (just to see how the result is transpiled)
npm run transpile
# Bundle with Webpack (to see tree-shaking in action)
npm run webpack
```
In /app, you'll find a simple example of a named import, being tested with mocha/sinon/chai.
You can check how easy it is to stub the named import !

In /app_star, you'll find the same example but with the `import * as` syntax.

### Tree-shaking in action !

In both examples, the method `minus` in `math.js` is unused.

Running webpack will generate two bundles in a /dist folder, one for each example. The interesting bit is at line 47 :

In app.js :
```js
/* harmony export */ exports["a"] = add;/* unused harmony export minus */
```

In app_star.js :
```js
/* harmony export */ exports["add"] = add;/* harmony export */ exports["minus"] = minus;
```

With the named import, Webpack is able to understand that the `minus` method is never used.

If you run `npm run webpack:prod`, the bundles will be minified; and `app.js` won't contain the `minus` method !