const cloudinary = require('cloudinary');
const { executionAsyncId } = require('async_hooks');
const { exit } = require('process');

module.exports = cloudinary.config({ 
    cloud_name: 'dvbuu8u2x', 
    api_key: '962681837577922', 
    api_secret: 'wdGnmMF8A3VwW_HSCHbqqB7hnnM',
});
