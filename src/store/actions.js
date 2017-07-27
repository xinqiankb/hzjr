import ajax from './../api'

export default {
    //获取头部导航栏目
    get_columns(context) {
        ajax.get(API+'index')
            .then(data => {
                context.commit('set_columns',data.catagory);
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
        context.commit('set_banner', './../static/img/banner.jpg');
    },
    //获取关于我们内容
    get_aboutUs(context) {
        ajax.get(API+'about')
            .then(data => {
                context.commit('set_aboutUs',data.array);
            })
            .catch(err => {
                console.log(err);
            })
    },
    //获取最新动态
    get_news(context) {
        context.commit('set_news', {
            'imgUrl': './../static/img/news-bg.png',
            'list': [{
                pic: './../static/img/test.jpg',
                name: '景泉财富厦门分公司隆重开业',
                content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
            }, {
                pic: './../static/img/test.jpg',
                name: '景泉财富厦门分公司隆重开业',
                content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
            }, {
                pic: './../static/img/test.jpg',
                name: '景泉财富厦门分公司隆重开业',
                content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
            }, {
                pic: './../static/img/test.jpg',
                name: '景泉财富厦门分公司隆重开业',
                content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
            }]
        })
    },
    //获取footer上面的三个栏目
    get_forumColumns(context) {
        context.commit('set_forumColumns', {
            logo: './../static/img/forumClubTitle.png',
            'content': [{
                imgUrl: './../static/img/forumClubBg.png',
                name: '投资管理',
                url: ''
            }, {
                imgUrl: './../static/img/forumClubBg.png',
                name: '金融学院',
                url: ''
            }, {
                imgUrl: './../static/img/forumClubBg.png',
                name: '融熠之家',
                url: ''
            }]
        })
    }
}