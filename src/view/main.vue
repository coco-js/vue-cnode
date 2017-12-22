<template>
	<div id="indexMain">
		<div class="slider">
			<slide></slide>
		</div>
		<div class="topicList">
			<topic-list></topic-list>
		</div>
	</div>
</template>

<script>
	import topicList from '../components/topicList'			//内容组件
	import slide from '../components/slide'					//右侧栏组件
	export default {
		name: 'indexMain',
		components: {
			topicList,
			slide
		}
	}
</script>

<style lang="scss" scoped>
	$min-height:500px;
	#indexMain {
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
		.topicList{
			display:flex;
			min-height:$min-height;
		}
	}
</style>