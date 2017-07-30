<template>
	<div class="single" id="single">
		<HeaderNavbar></HeaderNavbar>
		<div class="main">
			<div class="maincontent">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle'>{{article.title}}</p>
					<p class='arttime'><span style="margin-right:0.5rem">来源:&nbsp;&nbsp;&nbsp;{{article.source}}</span>日期:&nbsp;&nbsp;&nbsp;{{article.create_at}}</p>
					<p class='artcontent'><pre v-html='article.content'>{{article.content}}</pre></p>
				</div>	
			</div>
		</div>
		<footerBox></footerBox>
	</div>
</template>

<script>
	import HeaderNavbar from './../header'
	import footerBox from './../footer'
	export default {
		name:'single',
		components:{HeaderNavbar,footerBox},
		data(){
			return{
				article:{
				}
			}
		},
		mounted() {
			var artid = this.$route.params.id;
			console.log(artid)
			var datas= {'id':artid};
			var that = this;
			$.ajax({
				url:API +'newsdetail',
				type:"POST",
				data:{'id':artid},
				success:function(res){
					if(res.news !='null'){
						that.article = res.news; 
					}
					console.log(res)
				},
				error: function(res){

				}
			})
		}
	}
</script>

<style scoped>
	.single .main{width: 1200px;margin:0 auto;padding-bottom: 4rem}
	.maincontent{padding: 1rem 0}
	.listtltle{width: 100%;text-align:center;padding: 0.5rem 0;font-size: 1.5rem;letter-spacing: 2px;text-indent: 10px}
	.arttime{line-height: 1rem;font-size: 0.8rem;border-bottom: 1px solid rgb(232,232,232);padding-bottom: 0.5rem}
	.artcontent{margin-top: 0.5rem}


	@media only screen and (max-width: 768px){
		#single .main{width: 95%;margin:0 auto;}
		.listtltle{font-size: 1rem;padding: 1rem 0;}
		.arttime{width: 90%;margin: 0 auto}
	}
</style>