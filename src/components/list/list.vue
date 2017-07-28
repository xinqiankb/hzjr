<template>
	<div id="teamlist" class="teamlist">
		<HeaderNavbar></HeaderNavbar>
		<div class="main">
			<div class="maincontent">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle'>MANAGEMENT TEAM</p>
					<p class='listtltle' style="padding-top:0">团队介绍</p>
				</div>				
				<div class="group-list">
					<div class="team">
						<div class="teambox graybgc">
							<div class="imgbox"><img src="../../../static/img/team.jpg" alt=""></div>
							<div class="info">
								<div class="infoname">
									<p class="name">xinqian</p>
									<p class="subtitle">投资总监</p>
									<p class="line "></p>
								</div>
								<article class="desc">
									<span>12年外资银行财富管理从业及管理经验，6年中资银行从业经验；历任外资银行零售银行副总裁，战略发展总监，培训总监，市场总监等职。丰富的中资银行一线工作经验，从事过柜员，国际业务，信贷，管理等多个岗位的工作。积累了丰富销售经验及团队管理经验，熟悉市场及产品投资策略和中高端客户金融需求，拥有丰富的财富管理业务实践经验，是外资银行在国内开展财富管理业务的第一批实践者</span>
								</article>							
								<article class="work">
									<p　class = 'workcareer'>工作经历</p>
									<p class="careerlist">
												新加坡星展银行 战略及市场总监、副总裁<br>
												苏格兰皇家银行（原荷兰银行） 零售银行中国区业务执行总监、副总裁<br>
												荷兰银行 零售银行战略发展总监、培训总监<br>
												花旗银行上海分行 零售银行贵宾客户经理<br>
												中国农业银行无锡分行 客户经理
									</p>
								</article>

							</div>
						</div>						
						<div class="teambox graybgc">
							<div class="imgbox"><img src="../../../static/img/team.jpg" alt=""></div>
							<div class="info">
								<div class="infoname">
									<p class="name">xinqian</p>
									<p class="subtitle">投资总监</p>
									<p class="line "></p>
								</div>
								<article class="desc">
									<span>12年外资银行财富管理从业及管理经验，6年中资银行从业经验；历任外资银行零售银行副总裁，战略发展总监，培训总监，市场总监等职。丰富的中资银行一线工作经验，从事过柜员，国际业务，信贷，管理等多个岗位的工作。积累了丰富销售经验及团队管理经验，熟悉市场及产品投资策略和中高端客户金融需求，拥有丰富的财富管理业务实践经验，是外资银行在国内开展财富管理业务的第一批实践者</span>
								</article>							
								<article class="work">
									<p　class = 'workcareer'>工作经历</p>
									<p class="careerlist">
												新加坡星展银行 战略及市场总监、副总裁<br>
												苏格兰皇家银行（原荷兰银行） 零售银行中国区业务执行总监、副总裁<br>
												荷兰银行 零售银行战略发展总监、培训总监<br>
												花旗银行上海分行 零售银行贵宾客户经理<br>
												中国农业银行无锡分行 客户经理
									</p>
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
					if(res.data !='null'){
						that.article = res.data; 
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
	} 

</style>