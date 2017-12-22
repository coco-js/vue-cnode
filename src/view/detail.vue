<template>
	<div id="detail">
		<div class="slider">
			<slide></slide>
		</div>
		<div class="content">
			<topic-content></topic-content>
		</div>
	</div>
</template>

<script>
	import topicContent from '../components/topicContent'
	import slide from '../components/slide'
	export default {
		name: 'detail',
		components: {
			topicContent,
			slide
		}
	}
</script>

<style lang="scss" scoped>
	$min-height:500px;
	#detail {
		width:1100px;
		max-width:1400px;
		min-width:960px;
		min-height:$min-height;
		margin:15px auto;
		.slider {
			width:280px;
			min-height:$min-height;
			margin-left:15px;
			float:right;
		}
		.content{
			display:flex;
			min-height:$min-height;
		}
	}
</style>