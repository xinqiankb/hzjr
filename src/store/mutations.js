export default {
    //设置头部导航栏目
    set_columns (state,payload) {
        for(var i = 0 ; i< payload.length;i++){
            var node = payload[i].child;
            var child = [];
            for(var j = 0; j < node.length;j++){
                //删除2级栏目空数组
                if(node[j].length != '0'){
                    child.push(node[j]);
                }
            }
            payload[i].child = child;
        }
        state.columns= payload;
    },
    //设置logo
    set_logo (state,payload) {
        state.logo = payload;
    },
    //设置banner
    set_banner (state,payload) {
        state.banner = payload;
    },
    //设置关于我们内容
    set_aboutUs (state,payload) {
        state.aboutUs = payload;
    },
    //设置最新动态
    set_news (state,payload) {
        state.news = payload;
    },
    //设置footer上面的三个栏目
    set_forumColumns (state,payload) {
        state.forumColumns = payload;
    },
    //设置footer的内容
    set_footer (state,payload) {
        state.footer = payload;
    }, 

    //设置网站须知的内容
    set_webtips (state,payload) {
        var content = payload.must_know;
        var reg = new RegExp("\r\n", "g");
        var content = content.replace(reg,'</br>');
        console.log(content)
        state.webtips = content;
    }
}
 