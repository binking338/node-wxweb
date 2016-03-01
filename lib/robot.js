module.exports = function(api) {
    api.text(function(msg, sendHandle) {

        if (msg.Content.indexOf('你好') >= 0 || msg.Content.indexOf('您好') >= 0) {
            sendHandle(api.message.createText(msg.FromUserName, '您好，您真有礼貌！'));
        //} else if (msg.Content.startWith('我是')) {

        } else {
            sendHandle(api.message.createText(msg.FromUserName, '您好！有什么需要小王帮忙的么？/呲牙'));
        }
    });
};