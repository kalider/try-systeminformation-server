const si = require('systeminformation');

si.services('maria').then(data => console.log(data));
si.services('mysqld').then(data => console.log(data));
