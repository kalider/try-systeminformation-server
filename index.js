const si = require('systeminformation');

si.cpu().then(data => console.log('cpu', data));

si.mem().then(data => console.log('mem', data));

si.fsSize().then(data => console.log('fs', data));

si.diskLayout().then(data => console.log('disk', data));

si.osInfo().then(data => console.log('os', data));