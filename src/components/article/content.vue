<template>
	<div id="Artcontent" class="content artcon">
		<div class="main">
			<div class="maincontent">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle'>{{article.title}}</p>
					<p class='arttime'>
						<span style="margin-right:0.5rem">来源:&nbsp;&nbsp;&nbsp;{{article.source}}</span>日期:&nbsp;&nbsp;&nbsp;{{article.create_at}}</p>
					<p class='artcontent'>
						<p class="content" v-html='article.content'>{{article.content}}</p>
					</p>
				</div>
				<div v-if="show" style="text-align:center;margin-top:3rem">暂无内容</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Artcontent',
	data() {
		return {
			article: '',
			show: false
		}
	},
	computed: {
		...mapState({
			// 文章页面当前路由参数
			parameterId: state => state.parameterId
		})
	},
	created() {
		var _this = this;
		$.ajax({
			url: API + 'detail',
			type: "POST",
			data: { 'id': this.$route.params.id },
			success: function (res) {
				if (res.data != 'null') {
					_this.article = res.data;
				}
				if (res.data.content == '') {
					_this.show = true;
				}
			},
			error: function (res) {

			}
		})
	},
	watch: {
		"$route.params":'change',
		// parameterId(state) {
		// 	var _this = this;
		// 	$.ajax({
		// 		url: API + 'detail',
		// 		type: "POST",
		// 		data: { 'id': state },
		// 		success: function (res) {
		// 			if (res.data != 'null') {
		// 				_this.article = res.data;
		// 			}
		// 			if (res.data.content == '') {
		// 				_this.show = true;
		// 			}
		// 		},
		// 		error: function (res) {

		// 		}
		// 	})
		// }
	},
	methods:{
		change: function(){
		var _this = this;
		$.ajax({
			url: API + 'detail',
			type: "POST",
			data: { 'id': this.$route.params.id },
			success: function (res) {
				if (res.data != 'null') {
					_this.article = res.data;
				}
				if (res.data.content == '') {
					_this.show = true;
				}
			},
			error: function (res) {

			}
		})
		}
	}
}
</script>

<style scoped>
html {
	font-size: 20px
}

#Artcontent .main {
	width: 1200px;
	margin: 0 auto;
	padding-bottom: 4rem
}

#Artcontent .main .maincontent {}

.listtltle {
	width: 100%;
	text-align: center;
	padding: 0.5rem 0;
	font-size: 1.5rem;
	letter-spacing: 2px;
	text-indent: 10px
}

.arttime {
	line-height: 1rem;
	font-size: 0.8rem;
	border-bottom: 1px solid rgb(232, 232, 232);
	padding-bottom: 0.5rem;
	text-align: center
}

.artcontent {
	margin-top: 0.5rem
}

.artcontent p img {
	width: 100% !important
}

.content {
	text-indent: 2rem;
	padding-left: 0.6rem;
	padding-right: 0.6rem;
}

@media only screen and (max-width: 768px) {
	#Artcontent .main {
		width: 100%
	}
	.listtltle {
		font-size: 1rem;
		padding: 1rem 0;
	}
	.arttime {
		width: 90%;
		margin: 0 auto
	}
}
</style>