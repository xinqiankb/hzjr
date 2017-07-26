export default {
    //设置头部导航1级栏目
    set_columns (state,payload) {
        state.columns = payload;
    },
    //设置头部导航2级栏目
    set_subColumn (state,payload) {
        state.subColumn = payload;
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
    }
}