<template>
	<div id="container">
		<div class="nav">
			<a href="#" class="click">全部</a>
			<a href="#">精华</a>
			<a href="#">分享</a>
			<a href="#">问答</a>
			<a href="#">招聘</a>
		</div>
		<div class="list">
			<div class="cell clearfix" v-for='row in list'>
				<a href="##" class="avatar" :title="row.author.loginname"><img :src='row.author.avatar_url' class="author" alt=""></a>
				<span class="reply">
					<span class="reply_count" title="回复数">{{ row.reply_count }}</span>/
					<span class="visit_count" title="点击数">{{ row.visit_count }}</span>
				</span>
				<span class="last_time">{{ formatTime(row.last_reply_at) }}</span>
				<div class="title">
					<span class="tab" :class="{ put_top: row.top,put_good: row.good }">{{ tab(row.top,row.good,row.tab) }}</span>
					<div class="text"><a href="##" :title="row.title">{{ row.title }}</a></div>
				</div>
			</div>
		</div>
		<pagination :show-pages="showPages" :total-pages="totalPages" @sendPage="sendPage" ref="pagination"></pagination>
	</div>
</template>

<script>
	import { formatPassTime } from '../assets/js/common.js'
	import pagination from '../components/pagination.vue'
	export default {
		name: 'container',
		data() {
			return {
				page: 1,			//cnodeAPI 参数：页码
				limit: 30,			//cnodeAPI 参数：显示数量
				mdrender: 'true',	//cnodeAPI 参数：是否markdown格式
				list: [],			//回调数据
				showPages: 	5,		//分页：显示格数
				totalPages: 50		//分页:总页数
			}
		},
		mounted() {
			this.getContent();
		},
		methods: {
			//请求cnodeAPI
			getContent:function() {
				this.$http.get("https://cnodejs.org/api/v1/topics",{
					params: {
						page: this.page,
						limit: this.limit,
						mdrender: this.mdrender
					}
				}).then(res=>{
					console.log(res)
					this.list = res.data.data;
				})
			},
			//时间格式：过去式
			formatTime: function(lastTime) {
				lastTime = Date.parse(lastTime);
				return formatPassTime(lastTime);
			},
			//判断tab类型
			tab: function(top,good,el) {
				var el = el;
				if(top){
					el = "置顶";
				}else if(good){
					el = "精华";
				}else{
					switch(el) {
						case "ask":
							el = "问答";
							break;
						case "share":
							el = "分享";
							break;
						case "job":
							el = "招聘";
							break;
					}
				}
				return el;
			},
			//接受子组件传参并重新调用接口
			sendPage: function(data) {
				this.page = data;
				this.getContent();
			}
		},
		components: { 
			pagination
		}
	}
</script>

<style lang="scss" scoped>
	$radius:3px;
	#container {
		width:100%;
		background:#fff;
		border-radius:$radius;
		.nav {
			padding:10px;
			background:#f6f6f6;
			font-size:12px;
			border-radius:3px 3px 0 0;
			a {
				display:inline-block;
				padding:3px 4px;
				margin:0px 10px;
				border-radius:$radius;
				color:#80bd01;
				text-decoration:none;
			}
			.click {
				background:#80bd01;
				color:#fff;
			}
		}
		.list {
			font-size:14px;
			.cell {
				padding:10px;
				border-bottom:1px solid #f0f0f0;
				.author {
					width:25px;
					height:25px;
					border-radius:$radius;
				}
				.avatar {
					display:inline-block;
					float:left;
				}
				.reply{
					display:inline-block;
					width:70px;
					padding:5px 0;
					float:left;
					text-align:center;
					font-size:12px;
					.reply_count{
						color:#666;
					}
					.visit_count{
						color:#c3c3c3;
					}
				}
				.last_time {
					padding:5px 0px;
					float:right;
					font-size:12px;
					color:#666;
				}
				.title {
					
					padding:5px 0px;
					.tab {
						position:relative;
						top:-5px;
						display:inline-block;
						margin:0 3px;
						padding:2px;
						font-size:12px;
						color:#999;
						background:#e5e5e5;
						border-radius:$radius;
					}
					.text {
						display:inline-block;
						width:70%;

						white-space: nowrap;
						overflow:hidden;
						text-overflow: ellipsis;
						a {
							color:#333;
							text-decoration:none;
							&:hover{
								text-decoration:underline;
							}
						}
					}
					.put_good,.put_top {
						background: #80bd01;
						color:#fff;
					}
				}
				&:hover {
					background:#f6f6f6;
				}
			}
			.cell:last-child{
				border-bottom:0;
			}
		}
	}
</style>