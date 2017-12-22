<template>
	<div id="footer">
		<div class="inner">
			<p><span>我的GitHub</span><a href="https://github.com/coco-js" target="_blank">https://github.com/coco-js</a></p>
			<p><span>项目源码</span><a href="https://github.com/coco-js/vue-cnode" target="_blank">https://github.com/coco-js/vue-cnode</a></p>
			<p><span>我的QQ</span>199031119</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	#footer {
		background:#fff;
		.inner {
			width: 1100px;
			padding:15px 0px;
			margin:0 auto;
			color:#555;
			font-size:14px;
			p {
				line-height:2em;
				span {
					position:relative;
					display:inline-block;
					width:90px;
					text-align:left;
					&::after {
						content: "：";
						position:absolute;
						right:0;
					}
				}
			}
			a {
				color:#089;
			}
		}
	}
</style>