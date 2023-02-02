const si = require('systeminformation');

si.cpu().then(data => console.log('cpu', data));

si.mem().then(data => console.log('mem', data));

si.fsSize().then(data => console.log('fs', data));

si.diskLayout().then(data => console.log('diskLayout', data));

si.osInfo().then(data => console.log('os', data));

si.system().then(data => console.log('system', data));

si.uuid().then(data => console.log('uuid', data));

si.cpuTemperature().then(data => console.log('cpuTemp', data)); 

si.memLayout().then(data => console.log('memLayout', data));

si.services('mariadb, apache2').then(data => console.log(data));

si.cpuCurrentSpeed().then(data => console.log('cpuCurrentSpeed', data));

si.currentLoad().then(data => console.log('cpuLoad', data));
