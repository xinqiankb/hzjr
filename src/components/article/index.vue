<template>
	<div class="article" id="article">
		<HeaderNavbar></HeaderNavbar>
		<Content></Content>
	</div>
</template>

<script>
	import Content from './content'
	import HeaderNavbar from './../header'
	export default{
		name:'article',
		components:{
			Content,HeaderNavbar
		},
		data(){
			return {

			}
		}

	}

</script>