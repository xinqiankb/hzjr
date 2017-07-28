import ajax from './../api'

export default {
    //获取头部导航栏目
    get_columns(context) {
        ajax.get(API + 'index')
            .then(data => {
                context.commit('set_columns', data.catagory);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取logo
    get_logo(context) {
        context.commit('set_logo', './../static/img/logo.jpg');
    },
    //获取banner
    get_banner(context) {
        ajax.get(API + 'slide')
            .then(data => {
                context.commit('set_banner', data.slide);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取关于我们内容
    get_aboutUs(context) {
        ajax.get(API + 'about')
            .then(data => {
                context.commit('set_aboutUs', data.array);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取最新动态
    get_news(context) {
        ajax.get(API + 'stock')
            .then(data => {
                context.commit('set_news', data.array);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取footer上面的三个栏目
    get_forumColumns(context) {
        ajax.get(API + 'manger')
            .then(data => {
                context.commit('set_forumColumns', data.array);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取footer的内容
    get_footer(context) {
        ajax.get(API + 'message')
            .then(data => {
                context.commit('set_footer', data.array);
            })
            .catch(err => {
                console.log(err);
            })
    }
}