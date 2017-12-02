/**
 * Created by yhy on 2017/7/7.
 */

var platFlag=testPlat();      //测试浏览器平台，并存为全局变量，方便后续调用，0为安卓，1为ios，2为PC
var $woMo = $('#woMo');

//测试浏览器平台，0为安卓，1为ios，2为PC
function testPlat(){
    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){ //android终端
        return 0;
    }else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){ //ios终端
        return 1;
    }else{
        return 2;
    }
}

$woMo.on('click',function () {
    if (platFlag == 0) {
        window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bianker.axiba";
    }else if(platFlag == 1){
        window.location.href = "https://itunes.apple.com/cn/app/喔末-新生代娱乐社群/id1137496808?mt=8";
    }else{
        window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.bianker.axiba";
    }
});



// 2秒自动消失提示框
function showAlert(str){
    var cfg= {
        id: ".kBubble",
        speed: 2000
    };
    var oBubble = $(cfg.id);
    if (!oBubble.length) {

        oBubble = $('<div class="kBubble" />').appendTo($("body"));
        oBubble.html(str).fadeIn();
    }
    setTimeout("$('.kBubble').fadeOut('slow',function(){$('.kBubble').remove();})", cfg.speed);

}