var Promise = require('promise-polyfill');

Promise.resolve(2).then(console.log.bind(console))
