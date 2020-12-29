// A simple API handler for any and all HTTP request types
/*
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'hello' }));
};
*/

// Need something more complex, closer to Express. Need to split off the
// different HTTP methods and handle them differently. We could switch on
// req.get, or req.post, but let's use this module: next-connect. Turn any
// handler into an Express-like router that has its own methods on it, and also
// be able to use any Connect-based middleware (e.g., cors).
import nc from 'next-connect';

// Create a handler. You get chainable methods.
const handler = nc()
  // 'req' and 'res' are short for 'request' and 'response'. I.e., here's the
  // incoming request, and here's how we're gonna respond to it. You could put
  // `async` in front of (req, res) if you need asynch, like a database call.
  .get((req, res) => {
    res.json({ message: 'get ok' });
  })
  .post((req, res) => {
    res.json({ message: 'posted ok' });
  });

export default handler;
