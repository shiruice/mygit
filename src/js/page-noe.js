$(function () {
    setInterval(function working() {
        var p = new Date('2080-12-31 23:59:59:999')
        var timesTampt = (new Date(p)).getTime()
        var timesTampo = (new Date()).getTime();
        var timse = timesTampt - timesTampo
        if(timse<0){
            $('span').html(0 + '天' + 0 + '小时' + 0 + '分' + 0 + '秒')
            return
        }
        var y = 24 * 60 * 60 * 1000
        var d = 60 * 60 * 1000
        var s = 60 * 1000
        // console.log(p)
        var xy = Math.floor(timse / y)
        // console.log(xy)
        var xd = Math.floor((timse - xy * y) / d)
        xd >= 10 ? xd = xd : xd = '0' + xd
        //    console.log(xd)
        var xs = Math.floor((timse - xy * y - xd * d) / s)
        xs >= 10 ? xs = xs : xs = '0' + xs
        //    console.log(xs)
        var xm = Math.floor((timse - xy * y - xd * d - xs * s) / 1000)
        xm >= 10 ? xm = xm : xm = '0' + xm
        //    console.log(xm)
        var vm = (timse - xy * y - xd * d - xs * s - xm * 1000)
        vm >= 100 ? vm = vm : vm >= 10 ? vm = '0' + vm : '00' + vm
        var r = xy + '天' + xd + '小时' + xs + '分' + xm + '秒';
        // console.log(r)
        $('span').html(r)
    }, 1000);
})