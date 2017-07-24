<template>
    <div class="about">
        <div class="pic" v-bind:style="{ background: 'url('+aboutImg+')' }"></div>
        <div class="aboutUs-wrap">
            <img :src="aboutUs" alt="">
            <p class="p-title">关于我们</p>
            <p class="p-content">依托景荣基金在资产管理领域的专业能力，景泉财富汇聚投资专家、税务法律专家、财富管理专家，为个人客户、家族企业、机构投资人提供专业理财服务。根据客户的风险偏好、财务状况、理财目标、事业发展、家庭结构等因素，景泉财富的专业团队可为客户量身定制理财规划，将国内外优秀的固定收益类，现金管理类，有价证券类和选择性投资产品进行科学配置，同时提供全方位咨询服务，满足客户在人生不同时期、不同维度的财富需求，为组建家庭、养育子女、养老、财富传承等需求提供针对性的财富管理解决方案。</p>
            <ul>
                <li>
                    <span></span>
                    我们的目标始终如一：只会理财，尊享人生
                </li>
                <li>
                    <span></span>
                    我们的经营理念：中立客观、贴合需求、量身定做、财富增值
                </li>
                <li>
                    <span></span>
                    我们的重点始终是：协助客户早点实现财务自由
                </li>
            </ul>
        </div>
        <a href="" class="button">MORE ></a>
    </div>
</template>

<script>
export default {
    props: ['aboutImg','aboutUs'],
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.about {
    background: #FCFCFC;
    width: 1240px;
    position: relative;
    margin: -50px auto 145px auto;
}
.pic{
    display: inline-block;
    width: 600px;
    height: 440px;
    margin: 30px;
    background-size: 100% auto;
}
.aboutUs-wrap{
        display: inline-block;
    width: 500px;
    margin: 40px 0 0 15px;
    text-align: left;
    position: absolute;
}
.p-title{
    line-height: 25px;
    margin:20px 0;
    text-indent: 0 !important;
    font-size: 18px !important;
    color: #666 !important;
}
.p-content{
    font-size: 14px;
    color: #999;
    line-height: 25px;
    text-indent: 20px;
    margin: 20px 0;
}
ul{
        list-style-type: none;
    color: #666;
    font-size: 14px;
    line-height: 25px;
}
li{
    list-style-type: none;
    color: #666;
    font-size: 14px;
    line-height: 25px;
    margin-left: -2.3rem;
}
li span{
    display: inline-block;
    background-color: #666;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    margin: 0 6px 0 0;
}
.button{
    width: 80px;
    height: 40px;
    padding: 0;
    background:#cd934f;
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color:#FFF;
    text-align: center;
    line-height: 40px;
}
.button:hover{
    background: #b88446;
}
</style>
