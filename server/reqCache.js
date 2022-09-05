const NodeCache = require("node-cache");

const myCache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  const key = req.url;
  const cachedBody = myCache.get(key);
  if (cachedBody) {
    console.log("Going to send from cache");
    res.send(cachedBody);
  } else {
    console.log("Going to send from API");
    res.sendResponse = res.send;
    res.send = (body) => {
      myCache.set(key, body, duration);
      res.sendResponse(body);
    };
    next();
  }
};
