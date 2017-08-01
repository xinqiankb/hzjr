<template>
	<div class="news" id="news">
		<HeaderNavbar></HeaderNavbar>
		<div class="main">
			<div class="maincontent">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle' style="">{{navname}}</p>
				</div>				
				<div class="group-list">
					<div class="team">
						<div class="teambox graybgc" v-for="item in artlist">
							<div class="imgbox"><img src="../../../static/img/team.jpg" alt=""></div>
							<div class="info">
								<div class="infoname">
									<p class="name">{{item.title}}</p>
									<p class="subtitle"><span class="createtime" style="margin:0.2rem 0">{{item.create_at}}</span></p>
									<p class="line "></p>
								</div>
							</div>
							<div class="info">
								<article class="desc">
										<span>{{item.remark}}</span>
								</article>
							</div>
							<router-link :to="{name:'single',params:{id:item.id}}" class="readmore">	MORE >	</router-link>					
						</div>												
					</div>
				</div>
				<div class="page">
					<span class="pagebtn" @click="pre()">{{prepage}}</span>
					<span class="pagelist" v-for="(item,index) in pagenum"><i @click='findpage(item.num)' :class="{'pageactive':(index+1) == nowpage}" style="margin-right:0.2rem">{{item.num}}</i></span>
					<span class="pagebtn" @click="next">{{nextpage}}</span>
					<span>当前第</span><span>{{nowpage}}</span>页,共<span>{{sumpage}}页</span>
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
		name:'news',
		components:{HeaderNavbar,footerBox},
		data(){
			return{
				artlist:'',
				nowpage:1,
				pagesize:8,
				sumpage:'',
				navname:'',
				prepage:'上一页',
				pagelist:'',
				nextpage:'下一页',
				pagenum:"",
			}
		},
		mounted() {
			var artid = this.$route.params.id;
			var datas= {'id':11};
			var pagenumber = [] ;
			var that = this;
			$.ajax({
				url:API +'list',
				type:"POST",
				data:{'id':artid},
				success:function(res){
					var allpage ;
					console.log(res)
					if(res.count != 0){
						that.artlist = res.news;
						that.sumpage = res.count;
						that.navname = res.name;
						allpage = parseInt(res.count)/that.pagesize;
						console.log(allpage)
						if(allpage < 1){
							that.pagenum = [{num:1}];
							that.sumpage = 1;
						}
						else{
							that.sumpage = allpage;
							for(var i = 0 ; i < allpage;i++){
								var xx = {
									num:'',
								}
								xx.num = i + 1;
								pagenumber.push(xx);

							}
							that.pagenum = pagenumber;
						}
					}
				},
				error: function(res){

				}
			})
		},
		methods:{
			pre:function(e){
				var artid = this.$route.params.id;
				var that = this;
				var nowpage = that.nowpage;
				var sumpage = that.sumpage;
				var sendpage = nowpage - 2;
				if(nowpage <= 1){
					nowpage = 1;
				}
				else{
					that.nowpage --;
				}
				console.log(sendpage)
				$.ajax({
					url:API +'page',
					type:"POST",
					data:{'id':artid,'page':sendpage,'size':that.pagesize},
					success:function(res){
						console.log(res.news)
						var data = res.news;
						that.artlist = "";
						that.artlist = data;
					},
					error: function(res){

					}
				})

			},
			next: function(e){
				var artid = this.$route.params.id;
				var that = this;
				var nowpage = that.nowpage;
				var sumpage = that.sumpage;
				var sendpage = nowpage;
				if(nowpage >= sumpage){
					sendpage = sumpage - 1;
				}
				else{
					that.nowpage ++;
				}
				console.log(sendpage + 'xx')
				$.ajax({
					url:API +'page',
					type:"POST",
					data:{'id':artid,'page':sendpage,'size':that.pagesize},
					success:function(res){
						var data = res.news;
						that.artlist = "";
						that.artlist = data;
					},
					error: function(res){

					}
				})
			},
			findpage:function(index){
				var artid = this.$route.params.id;
				var that = this;
				var sendpage = index - 1;
				that.nowpage = index;
				if(that.nowpage >=5){
					that.nowpage = 5;
				}
				var sumpage = that.sumpage;
				$.ajax({
					url:API +'page',
					type:"POST",
					data:{'id':artid,'page':sendpage,'size':that.pagesize},
					success:function(res){
						var data = res.news;
						that.artlist = "";
						that.artlist = data;
					},
					error: function(res){

					}
				})
			}
		}
	}
</script>
<style scoped>
	html{font-size: 20px}
	.news .main{width: 1200px;margin:0 auto;padding-bottom: 4rem}
	.news .main .maincontent{}
	.graybgc{box-shadow: 0 0 5px 5px #eee;-webkit-box-shadow: 0 0 5px 5px #eee;-o-box-shadow: 0 0 5px 5px #eee;-moz-box-shadow: 0 0 5px 5px #eee;cursor: pointer;}
	.graybgc:hover{box-shadow: 0 0 5px 5px #ddd;-webkit-box-shadow: 0 0 5px 5px #ddd;-o-box-shadow: 0 0 5px 5px #ddd;-moz-box-shadow: 0 0 5px 5px #ddd;}
	.main .maincontent .group-list{}
	.listtltle{width: 100%;text-align:center;padding: 0.5rem 0;font-size: 1.5rem;margin-top: 2rem}
	.teambox{margin-top: 2.5rem;padding: 2rem;position: relative;padding-bottom: 15rem}
	.teambox:nth-of-type(1){margin-top: 0}
	.teambox .imgbox{width: 10rem;overflow:hidden;margin-right: 2rem;display:inline-block;vertical-align: top;float: left;}
	.teambox .imgbox img{width: 100%}
	.teambox .info{display:inline-block;width: calc(100% - 15rem);width: -webkit-calc(100% - 15rem);width: -o-calc(100% - 15rem);width: -moz-calc(100% - 15rem);float: left}
	.infoname p{padding: 0.1rem 0;color:#888 }
	.infoname .name{color: #333}
	.infoname .subtitle{font-size: 0.8rem}
	.infoname .line{width: 2.5rem;height:2px;background-color:#cd934f;padding: 0;margin-top:2px;}
	.teambox .desc{font-size: 0.7rem;color: #888;letter-spacing: 0.5px;margin: 1rem 0;line-height: 1.2rem}
	.teambox .work .workcareer{color: #777;font-size: 0.8rem;margin-bottom: 0.5rem}
	.teambox .work .careerlist{color: #999;font-size: 0.7rem;line-height: 1.4rem}
	.readmore{position: absolute;right: 10px;bottom: 10px;color: #fff;padding: 0.4rem 0.8rem;background-color: #dea562;text-decoration: none}
	.readmore:hover{background-color: #cd934f}
	.pagebtn{cursor: pointer;}
	.page{margin-top: 2rem;text-align: right;padding-bottom: 4rem;}
	.page .pagelist i{color: #888;cursor: pointer;}
	.pageactive{color: #000 !important}


	@media only screen and (max-width: 768px){
		.news .main{width: 100%}
		.teambox{padding-bottom: 1rem;margin-top: 0.2rem}
		.teambox .imgbox{float: none;margin: 0 auto;display: block; }
		.teambox .info{float: none;width: 100%;}
		.teambox .infotitle{display:inline-block;width: calc(100% - 15rem);width: -webkit-calc(100% - 15rem);width: -o-calc(100% - 15rem);width: -moz-calc(100% - 15rem);}
		.info .subtitle{font-size: 0.8rem;color: #888;padding-top: 0.5rem;display: inline-block;}
		.teambox .desc{}
		.teambox .desc{margin-bottom:  0;margin-top: 0.2rem}
		.readmore{left: 10px;padding: 0.2rem;font-size: 0.5rem;position: initial;margin-top: 0.2rem;display: inline-block;}
		.listtltle{margin-top: 0.5rem;padding: 0}
		.page{margin-top: 2rem;text-align: right;padding:0 2rem;padding-bottom: 4rem;}
	} 
</style>