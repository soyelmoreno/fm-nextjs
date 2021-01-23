// src/data/data.js

// Just a place in memory to store our data
const notes = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`
}));

// Do module.exports rather than an ES6 export, otherwise it won't persist
module.exports = notes;
