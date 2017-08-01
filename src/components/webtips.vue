<template>
	<div class="webtips" id="webtips" v-if="contentstatus">
		<div class="tipbox">
			<p class="tipstitle">阅读须知</p>
			<article class="tipcontent" v-html="webtips">{{webtips}}</article>
			<div class="readyes" @click="tipshide()">我确认我或我所代表的机构是一名“合格投资者”，而且同意接受上述所有条件和条款</div>
			<div class="readno" @click="windowclose()">我或我所代表的机构不是一名“合格投资者”，或者我/我们不同意接受上述所有条件和条款</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:'webtips',
		data(){
			return {
				contentstatus:true,
			}
		},
	    computed: {
	        ...mapState({
	            webtips: state => state.webtips,
	        })
	    },
	    methods:{
	    	tipshide: function(){
	    		var that = this;
	    		that.contentstatus = !that.contentstatus
	    	},
	    	windowclose: function(){
	    		if(navigator.userAgent.indexOf("Chrome") > 0){
	    			window.open("about:blank","_self").close();
	    		}	    		
	    		if(navigator.userAgent.indexOf("Chrome") > 0){
	    			window.open("about:blank","_self").close();
	    		}
	    		else{
	    			window.close();
	    		}
	    	}
	    }
	}
</script>

<style scoped="">
	#webtips{width: 100%;height: 100%;position: fixed;background-color: rgba(255,255,255,0.9);top: 0;left: 0}
	.tipbox{width: 80%;margin: 0 auto;min-width: 300px;margin-top:5%;}
	.tipstitle{text-align: center;line-height: 2rem;font-size: 1.8rem;margin-bottom: 0.5rem}
	.tipcontent{margin-top: 10px;line-height: 2rem;font-size: 1.1rem}
	.readyes{width: 100%;padding: 0.6rem 0;font-size: 1rem;text-align: center;color: #fff;margin-top: 0.5rem;border-radius: 0.8rem;cursor: pointer;}
	.readno{width: 100%;padding: 0.6rem 0;font-size: 1rem;text-align: center;color: #fff;margin-top: 0.5rem;border-radius: 0.8rem;cursor: pointer;}
	.readyes{background-color: #C31414;}
	.readno{background-color: #666;}
</style>