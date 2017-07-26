<template>
	<div class="single" id="single">
		<HeaderNavbar></HeaderNavbar>
		<div class="main">
			<div class="maincontent">
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

			}
		}
	}
</script>

<style scoped>
	.single .main{width: 1200px;margin:0 auto;padding-bottom: 4rem}
	.maincontent{padding: 1rem 0}
</style>