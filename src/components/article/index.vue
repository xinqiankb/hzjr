<template>
	<div class="article" id="article">
		<HeaderNavbar></HeaderNavbar>
		<Artcontent></Artcontent>
		<footerBox></footerBox>
	</div>
</template>

<script>
	import Artcontent from './content'
	import HeaderNavbar from './../header'
	import footerBox from './../footer'
	export default{
		name:'article',
		components:{
			Artcontent,HeaderNavbar,footerBox
		},
		data(){
			return {

			}
		}

	}

</script>