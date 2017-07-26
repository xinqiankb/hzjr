<template>
	<div id="content" class="content artcon">
		{{article.name}}
	</div>
</template>

<script>
	export default{
		name:'content',
		data(){
			return {
				article:{
					name:'111',
				}
			}
		}
	}
</script>

<style>
	.artcon{width: 1100px;min-width: 800px;margin: 0 auto;}
</style>