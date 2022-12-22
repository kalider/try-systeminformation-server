const si = require('systeminformation');

si.cpu().then(data => console.log(data));

si.mem().then(data => console.log(data));

si.fsSize().then(data => console.log(data));
