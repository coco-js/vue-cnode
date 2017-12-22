<template>
	<div id="indexMain" class="main">
		<div class="slider">
			<div class="item">
				<div class="panel">
					<p>CNode：Node.js专业中文社区</p>
					<p>您可以 <a href="###">登录</a> 或 <a href="###">注册</a> , 也可以</p>
					<p><a href="###" class="button-github">通过 GitHub 登录</a></p>
				</div>
			</div>
			<div class="item">
				<h3>无人回复话题</h3>
				<div class="panel">
					<ul>
						<li title="node源码粗读（4）：process对象底层实现">node源码粗读（4）：process对象底层实现</li>
						<li title="如何在 Egg.js 中使用 TypeScript">如何在 Egg.js 中使用 TypeScript</li>
						<li title="入门到放弃node系列之网络模块（一）">入门到放弃node系列之网络模块（一）</li>
						<li title="【Webpack】1.入门及简单使用">【Webpack】1.入门及简单使用</li>
						<li title="【Webpack】1.入门及简单使用2">【Webpack】1.入门及简单使用2</li>
					</ul>
				</div>
			</div>
			<div class="item">
				<h3>积分榜   TOP 100 >></h3>
				<div class="panel">
					<ul>
						<li title="TodoKit之前上传的源码 忘记传配置文件了，所以可能下载源码无法运行，现在可以了">TodoKit之前上传的源码 忘记传配置文件了，所以可能下载源码无法运行，现在可以了</li>
						<li title="如何在 Egg.js 中使用 TypeScript">如何在 Egg.js 中使用 TypeScript</li>
						<li title="Hydux: 一个 Elm-like 的 全功能的 Redux 替代品">Hydux: 一个 Elm-like 的 全功能的 Redux 替代品</li>
						<li title="求教导怎么用 Jest 测试 Koa2 Api Server">求教导怎么用 Jest 测试 Koa2 Api Server</li>
						<li title="开源免费接口管理平台eoLinker AMS 开源版3.1.5同步线上版！免费增加大量功能！">开源免费接口管理平台eoLinker AMS 开源版3.1.5同步线上版！免费增加大量功能！</li>
					</ul>
				</div>
			</div>
			<div class="item">
				<h3>我的练手项目</h3>
				<div class="panel">
					<ul>
						<li>左侧list使用axios请求数据</li>
						<li>计算过去时间</li>
						<li>判断类型并添加class</li>
						<li>分页组件调用</li>
					</ul>
				</div>
			</div>
			<div class="item">
				<h3>友情提示</h3>
				<div class="panel">
					<ul>
						<li>！！！右侧信息栏是静态信息。</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<container></container>
		</div>
	</div>
</template>

<script>
	import container from '../components/container'
	export default {
		name: 'indexMain',
		data() {
			return {
				
			}
		},
		components: {
			container
		}
	}
</script>

<style lang="scss" scoped>
	$min-height:500px;
	.main {
		width:1100px;
		max-width:1400px;
		min-width:960px;
		min-height:$min-height;
		margin:15px auto;
		.slider{
			width:280px;
			min-height:$min-height;
			margin-left:15px;
			float:right;
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
		}
		.container{
			display:flex;
			min-height:$min-height;
		}
	}
</style>