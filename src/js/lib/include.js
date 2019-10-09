var config = require('@/data/config.js');
var breadcrumb = require('@/data/breadcrumb.js');
var inc = function (name, sendData) {
    var _data = "", _arr;
    if (sendData) {
        _arr = sendData.split(".");
        if (_arr.length == 1) {
            _data = config.data[_arr[0]]
        } else {
            _data = config.data[_arr[0]][_arr[1]];
        }
    };
    var params = { data: _data };
    //面包屑传参
    if (_data && _arr[0] == 'breadcrumb') {
        var crumb = [];
        for(var i=0,imax=_data.length; i<imax; i++){
            crumb.push(breadcrumb.breadcrumb[_data[i]])
        }
        params = { data: crumb }
    }
    return require('@/components/' + name + ".ejs")(params);
};
module.exports = inc
