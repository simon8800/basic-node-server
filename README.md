# basic-node-server

## About

This project is to stand up a basic web server that serves HTML using the `http` module in Node.

One interesting pattern is the use of middleware learned from TraversyMedia where you create functions that consume the request and response arguments to process them before moving onto another middleware.

```js
// middleware
const logger = (req, res, next) => {
  // do something to req
  // do something to res
  next();
}

const anotherMiddleware = (req, res, next) => {
  // do something to req
  // do something to res
  next();
}

const server = http.createServer((req, res) => {
  logger(req, res, () => {
    anotherMiddleware(req, res, () => {
      // do stuff
    })
  })
}).listen(PORT);
```

