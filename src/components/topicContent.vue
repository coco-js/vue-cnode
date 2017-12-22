<template>
	<div id="container">
		<header>
			<h2>
				<span class="tab" :class="{ put_top: data.top,put_good: data.good }">{{ judTag(data.top,data.good,data.tab) }}</span>
				{{ data.title }}
			</h2>
			<p class="des">
				<span>发布于 {{ formatTime(data.create_at) }}</span>
				<span>作者 {{ author }}</span>
				<span>浏览次数 {{ data.visit_count }}</span>
				<span>来自 {{ judTag(false,false,data.tab) }}</span>
			</p>
		</header>
		<section id="article" v-html="data.content"></section>
	</div>
</template>

<script>
	import { formatPassTime,tag } from '../assets/js/common.js'
	export default {
		name: 'container',
		data() {
			return {
				id: this.$route.query.id,
				data:[],
				author: ''
			}
		},
		mounted() {
			this.getDetail();
		},
		methods: {
			getDetail() {
				let id = this.id;
				this.$http.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
					let data = res.data.data;
					this.data = data;
					this.author = data.author.loginname;
					document.title = data.title;
				})
			},
			judTag(top,good,el) {
				return tag(top,good,el)
			},
			formatTime(createTime) {
				createTime = Date.parse(createTime);
				return formatPassTime(createTime);
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import url('../assets/css/common.css');
	$radius:3px;
	#container {
		width:100%;
		background:#fff;
		border-radius:$radius;
		header {
			padding:10px;
			border-bottom:1px solid #e5e5e5;
			h2 {
				margin-bottom:5px;
				font-weight:bold;
				font-size:20px;
				text-align:center;
				.tab {
					top:-2px;
				}
			}
			.des {
				font-size:12px;
				text-align:center;
				color:#838383;
				span {
					display:inline-block;
					padding:0px 5px;
					&::before {
						content:"•";
					}
				}
			}
		}
		#article {
			padding:15px;
			font-size:14px;
			line-height:2em;
		}
	}
</style>

<style lang="scss">
	.markdown-text {
		p {
			margin:15px 0;
			color:#333;
		}
		ul {
			margin:0 0 10px 25px;
			li{
				line-height:2em;
				list-style-type: square;
			}
		}
		ol {
			margin:0 0 10px 25px;
			li {
				list-style-type:decimal;
			}
		}
		h1 {
			font-size:28px;
			font-weight:bold;
			margin:10px 0px;
		}
		h2 {
			margin:30px 0 15px;
			font-size:24px;
			font-weight:bold;
			border-bottom:1px solid #eee;
		}
		a {
			color:#08c;
		}
		.prettyprint {
			padding:0 15px;
			font-size:14px;
			background:#f7f7f7;
			code {
				color:inherit;
				white-space: pre-wrap;
			}
			.str { color:#080; }
		}
	}
</style>