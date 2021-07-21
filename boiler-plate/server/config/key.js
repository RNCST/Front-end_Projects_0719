if(process.env.NODE_ENV === 'projduction'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}