<template>
	<div id="Artcontent" class="content artcon">
		<div class="main">
			<div class="maincontent">
				<div class="group-list" style="padding-bottom:1rem">
					<p class='listtltle'>MANAGEMENT TEAM</p>
					<p class='listtltle' style="padding-top:0">团队介绍</p>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import ajax from '../../api'

	export default{
		name:'Artcontent',
		data(){
			return {
				article:{
					name:'111',
				}
			}
		},
		mounted() {
			var artid = this.$route.params.id;
			var datas= {'id':11};
			this.$http.post(API + 'detail',datas,{credentials:true})
			.then(function(res){
				console.log(res)
			},function(res){

			})
		}
	}
</script>

<style scoped>
	html{font-size: 20px}
	#Artcontent .main{width: 1200px;margin:0 auto;padding-bottom: 4rem}
	#Artcontent .main .maincontent{}
	.listtltle{width: 100%;text-align:center;padding: 0.5rem 0;}
</style>