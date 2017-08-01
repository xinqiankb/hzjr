<template>
	<div id="teamlist" class="teamlist">
		<HeaderNavbar></HeaderNavbar>
		<div class="main">
			<div class="maincontent"  style="">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle'>MANAGEMENT TEAM</p>
					<p class='listtltle' style="padding-top:0">团队介绍</p>
				</div>				
				<div class="group-list">
					<div class="team">

						<div class="teambox graybgc" v-for="item in article">
							<div class="imgbox"><img v-bind:src ="item.thumb" alt=""></div>
							<div class="info">
								<div class="infoname">
									<p class="name">{{item.title}}</p>
									<p class="subtitle">{{item.remark}}</p>
									<p class="line "></p>
								</div>
								<article class="desc">
									<pre v-html="item.content">{{item.content}}</pre>
								</article>

							</div>
						</div>

					</div>
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
		name:'teamlist',
		components:{HeaderNavbar,footerBox},
		data(){
			return{
				article:{}
			}
		},
		mounted() {
			var artid = this.$route.params.id;
			var datas= {'id':11};
			var that = this;
			$.ajax({
				url:API +'list',
				type:"POST",
				data:{'id':artid},
				success:function(res){
					var result = res.news;
					console.log(res)
					var length = result.length;
					for (var i = 0; i< length;i++){
						
					}
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
	html{font-size: 20px}
	.teamlist .main{width: 1200px;margin:0 auto;padding-bottom: 4rem}
	.teamlist .main .maincontent{}
	.graybgc{background-color: #eee}
	.main .maincontent .group-list{}
	.listtltle{width: 100%;text-align:center;padding: 0.5rem 0;}
	.teambox{margin-top: 2.5rem;padding: 2rem;}
	.teambox:nth-of-type(1){margin-top: 0}
	.teambox .imgbox{width: 10rem;margin-right: 2rem;display:inline-block;vertical-align: top}
	.teambox .imgbox img{width: 100%}
	.teambox .info{display:inline-block;width: calc(100% - 15rem)}
	.infoname p{padding: 0.1rem 0;color:#888 }
	.infoname .name{color: #333}
	.infoname .subtitle{font-size: 0.8rem}
	.infoname .line{width: 2.5rem;height:2px;background-color:#cd934f;padding: 0;margin-top:2px;}
	.teambox .desc{font-size: 0.7rem;color: #888;letter-spacing: 0.5px;margin: 1rem 0;line-height: 1.2rem}
	.teambox .work .workcareer{color: #777;font-size: 0.8rem;margin-bottom: 0.5rem}
	.teambox .work .careerlist{color: #999;font-size: 0.7rem;line-height: 1.4rem}

	@media only screen and (max-width: 768px){
		.teamlist .main{width: 100%}
		.teambox{padding-bottom: 1rem;margin-top: 0.2rem}
		.teambox .imgbox{float: none;margin: 0 auto;display: block; }
		.teambox .info{float: none;width: 100%;}
		.teambox .infotitle{display:inline-block;width: calc(100% - 15rem);width: -webkit-calc(100% - 15rem);width: -o-calc(100% - 15rem);width: -moz-calc(100% - 15rem);}
		.info .subtitle{font-size: 0.8rem;color: #888;padding-top: 0.5rem;display: inline-block;}
		.teambox .desc{}
		.teambox .desc{margin-bottom:  0;margin-top: 0.2rem}
		.readmore{left: 10px;padding: 0.2rem;font-size: 0.5rem;position: initial;margin-top: 0.2rem;display: inline-block;}
		.maincontent{padding-bottom:3rem}
	} 

</style>