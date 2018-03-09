<template>
	<div id="slide">
		<div class="item">
			<div class="panel">
				<p>CNode：Node.js专业中文社区</p>
				<p>您可以 <a href="###">登录</a> 或 <a href="###">注册</a> , 也可以</p>
				<p><a href="###" class="button-github">通过 GitHub 登录</a></p>
			</div>
		</div>
		<div class="item" v-if="id">
			<h3>文章作者</h3>
			<div class="panel">
				<div class="author">
					<p>
						<a href="###"><img :src="avatar_url" width="48" height="48" alt=""></a>
						<span>{{ loginname }}</span>
					</p>
					<p>积分：{{ score }}</p>
				</div>
			</div>
		</div>
		<div class="item">
			<h3>项目简介</h3>
			<div class="panel">
				<p>使用vue写个仿cnode社区，感谢cnode社区提供的API。</p>
				<p>技术栈：vue-cli脚手架,vue-router页面路由,axios数据请求;</p>
				<p>开源地址：<a class="link" href="https://github.com/coco-js/vue-cnode" target="_blank">https://github.com/coco-js/vue-cnode</a></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'slide',
		data() {
			return {
				id: this.$route.query.id,
				loginname: '',
				avatar_url: '',
				score: ''
			}
		},
		mounted() {
			this.getDetail();
		},
		methods: {
			getDetail() {
				let id = this.id;
				if(id){
					this.$http.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=>{
						let data = res.data.data;
						this.data = data;
						this.loginname = data.author.loginname;
						this.avatar_url = data.author.avatar_url;
						this.getAvatar(data.author.loginname);
					})
				}
			},
			getAvatar(loginname) {
				let author = loginname;
				console.log(author)
				this.$http.get(`https://cnodejs.org/api/v1/user/${author}`).then(res=>{
					console.log(res);
					this.score = res.data.data.score;
				})
			}
		}
	}
</script>

<style scoped lang="scss">
		.item {
			margin-bottom:15px;
			font-size:14px;
			background:#fff;
			border-radius:3px;
			.panel {
				padding:10px;
				li {
					padding:5px;
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
					cursor: pointer;
					color:#778087;
				}
				.author {
					color:#555;
					span {
						position:relative;
						top:-15px;
						color:#778087;
					}
				}
			}
			.button-github {
				display:inline-block;
				padding:8px 14px;
				background:#5bc0de;
				border-radius:3px;
				font-size:14px;
				color:#fff;
				text-decoration:none;
			}
			p {
				padding:5px 0px;
			}
			h3 {
				padding:10px;
				background:#f6f6f6;
				border-radius:3px 3px 0 0;
			}
		}
</style>