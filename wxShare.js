              // 微信分享
       $.getJSON("http://demo.ileou.com/newello/index.php/Thirdpart/Index/getWeixinAuthor", function (n) {
           if ("" != n.appid) {
               var e = n;
               wx.config({
                   debug: !1,
                   appId: e.appid,
                   timestamp: e.timestamp,
                   nonceStr: e.noncestr,
                   signature: e.signature,
                   jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
               }), wx.ready(function () {
                   console.log("微信分享")
                   setsharemsg()
               })
           }
       });

       var shareobj = {
           'title': "木染手工皂…",
           'desc': "",
           'link': "demo.ileou.com/videofalse",
//                'imgUrl': "http://demo.ileou.com/videofalse/shareimg.png"
           'imgUrl':"http://192.168.1.12:8080/h5pages/call img/Bitmap2@2x.png"
       };
       function setsharemsg() {
           console.log(shareobj),
                   wx.onMenuShareTimeline({
                       title: shareobj.title,
                       desc: shareobj.desc,
                       link: shareobj.link,
                       imgUrl: shareobj.imgUrl,
                       success: function () {
                       },
                       cancel: function () {
                       }
                   }), wx.onMenuShareAppMessage({
               title: shareobj.title,
               desc: shareobj.desc,
               link: shareobj.link,
               imgUrl: shareobj.imgUrl,
               success: function () {
                   console.log("微信分享成功")
               },
               cancel: function () {
               }
           })
       }