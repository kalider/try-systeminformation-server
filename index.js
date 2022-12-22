const si = require('systeminformation');

si.cpu().then(data => console.log('cpu', data));

si.mem().then(data => console.log('mem', data));

si.fsSize().then(data => console.log('fs', data));

si.diskLayout().then(data => console.log('diskLayout', data));

si.blockDevices().then(data => console.log('blockDevices', data));

si.osInfo().then(data => console.log('os', data));

si.system().then(data => console.log('system', data));

si.uuid().then(data => console.log('uuid', data));