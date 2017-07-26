import ajax from './../api'

export default {
    //获取头部导航栏目
    get_columns(context) {
        context.commit('set_columns', {
            'columns': [
                {
                    name: '首页'
                }, {
                    name: '关于融熠'
                }, {
                    name: '投资管理'
                }, {
                    name: '金融学院'
                }, {
                    name: '招贤纳士'
                }
            ],
            'subColumns': [
                {
                    name: '测试'
                },
                {
                    name: '测试'
                },
                {
                    name: '测试'
                }
            ]
        });
        ajax.get(API+'?r=index%2Ftest')
            .then(data => {
                console.log(data);
                //context.commit('set_columns',data)
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
        context.commit('set_aboutUs', {
            // logo
            'logo': './../static/img/aboutUs.png',
            // 图片
            'imgUrl': './../static/img/about.png',
            // 内容
            'content': '依托景荣基金在资产管理领域的专业能力，景泉财富汇聚投资专家、税务法律专家、财富管理专家，为个人客户、家族企业、机构投资人提供专业理财服务。根据客户的风险偏好、财务状况、理财目标、事业发展、家庭结构等因素，景泉财富的专业团队可为客户量身定制理财规划，将国内外优秀的固定收益类，现金管理类，有价证券类和选择性投资产品进行科学配置，同时提供全方位咨询服务，满足客户在人生不同时期、不同维度的财富需求，为组建家庭、养育子女、养老、财富传承等需求提供针对性的财富管理解决方案。',
            // 底部三个标签
            'tags': [{
                title: ' 我们的目标始终如一：只会理财，尊享人生'
            }, {
                title: '我们的经营理念：中立客观、贴合需求、量身定做、财富增值'
            }, {
                title: '我们的重点始终是：协助客户早点实现财务自由'
            }],
            // 链接url
            'Url': ''
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