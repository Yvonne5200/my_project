private void onClickShare() { 
    final Bundle params = new Bundle();
    params.putInt(QQShare.SHARE_TO_QQ_KEY_TYPE, QQShare.SHARE_TO_QQ_TYPE_DEFAULT);
    params.putString(QQShare.SHARE_TO_QQ_TITLE, "要分享的标题");
    params.putString(QQShare.SHARE_TO_QQ_SUMMARY,  "要分享的摘要");
    params.putString(QQShare.SHARE_TO_QQ_TARGET_URL,  "http://www.qq.com/news/1.html");
    params.putString(QQShare.SHARE_TO_QQ_IMAGE_URL,"http://imgcache.qq.com/qzone/space_item/pre/0/66768.gif");
    params.putString(QQShare.SHARE_TO_QQ_APP_NAME,  "测试应用222222");
    params.putInt(QQShare.SHARE_TO_QQ_EXT_INT,  "其他附加功能");		
    mTencent.shareToQQ(MainActivity.this, params, new BaseUiListener());
}