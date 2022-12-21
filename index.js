const si = require('systeminformation');

si.cpu(function(data) {
    console.log('CPU Information:');
    console.log('- manufacturer: ' + data.manufacturer);
    console.log('- brand: ' + data.brand);
    console.log('- speed: ' + data.speed);
    console.log('- cores: ' + data.cores);
    console.log('- physical cores: ' + data.physicalCores);
    console.log('...');
})
