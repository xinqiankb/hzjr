<template>
    <div class="news-content">
        <div class="news-bg" v-bind:style="{ background: 'url('+news.imgUrl+')' }">
            <p></p>
        </div>
        <div class="news-list">
            <ul>
                <li v-for="item in news.list">
                    <div>
                        <p>
                            <a href="" class="t1">{{ item.name }}</a>
                        </p>
                        <p>
                            {{ item.content }}
                        </p>
                        <a href="" class="button">MORE ></a>
                    </div>
                    <div>
                        <strong>30/</strong>
                        <span>"Jun"
                            <br> "2017"</span>
                        <div>
                            <img :src="item.pic" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['news'],
    data() {
        return {}
    }
}
</script>

<style scoped>
.news-content {
    height: 830px;
    width: 1240px;
    text-align: right;
    margin: 0 auto 165px auto;
}

.news-bg {
    display: inline-block;
    height: 830px;
    width: 460px;
    text-align: center;
    margin: 0;
    background-size: auto;
    background-repeat: no-repeat !important;
    background-position: right center !important;
}

.news-bg p {
    font-size: 18px;
    color: #666;
    text-align: left;
    margin: 220px 0 0 0;
}

.news-list {
    display: inline-block;
    height: 830px;
    width: 700px;
    text-align: left;
    margin: 0 0 0 80px;
    float: right;
}

.news-list ul {
    list-style: none;
}

.news-list ul li {
    background: #FCFCFC;
    height: 200px;
    margin: 0 0 10px 0;
    position: relative;
    border: 1px solid #FCFCFC;
}

.news-list ul li div:first-child {
    display: inline-block;
    width: 450px;
    margin: 30px 0 0 30px;
}

.news-list ul li div:first-child p:first-child {
    font-size: 18px;
    height: 22px;
    color: #666;
    margin: 0 0 20px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.t1 {
    text-decoration: none;
    color: #666;
}

.news-list ul li div:first-child p:first-child a.tl {
    position: relative !important;
    bottom: 0 !important;
    text-decoration: none !important;
    color: #666;
    position: absolute;
    bottom: 20px;
}

.news-list ul li div:first-child p:first-child+p {
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 0 0;
    color: #999;
    height: 66px;
    width: 100%;
    overflow: hidden;
}

.news-list ul li div:first-child .button {
    position: absolute;
    bottom: 20px;
    width: 80px;
    height: 30px;
    padding: 0;
    background-size: auto;
    background-color: transparent;
    border: 1px solid #999999;
    color: #888;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
}

.news-list ul li div:first-child+div {
    display: inline-block;
    width: 100px;
    margin: 5px 30px 0 0;
    float: right;
    color: #666;
    text-align: center;
}

.news-list ul li div:first-child+div strong {
    font-size: 34px;
}

.news-list ul li div:first-child+div span {
    display: inline-block;
    height: 30px;
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 0 3px;
}

.news-list ul li div:first-child+div div {
    margin: 0 0 0 0;
    float: none;
}

img {
    border: none;
    outline: none;
    width: 99px;
    height: 100px;
}

.news-list ul li div:first-child .button:hover {
    background-color: #CD934F;
    border: 1px solid #CD934F;
    color: #FFF;
}

.news-list ul li:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #848484;
    border: 1px solid #ccc;
}

.news-list ul li:hover .t1 {
    color: #cd934f;
}
</style>
