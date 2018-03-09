<template>
	<div class="pagination">
		<ul>
			<li @click="controlPage(curPage - 1)"><a class="lastPage" :class="{darkLight: curPage === 1}">上一页</a></li>
			<li v-for='page in pages' @click='controlPage(page)'>
				<a class="page" :class="{highLight: curPage === page}">{{ page }}</a>
			</li>
			<li @click="controlPage(curPage + 1)"><a class="nextPage" :class="{darkLight: curPage === totalPages}">下一页</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: {
			showPages: {
				type: Number,
				default: 5,
				required: true
			},
			totalPages: {
				type: Number,
				default: 10,
				required: true
			}
		},
		data () {
			return {
				curPage: 1
			};
		},
		computed: {
			pages () {
				let left = 1;
				let	right = this.totalPages;
				let	movePoint = Math.ceil(this.showPages / 2);
				let	pages = [];
				if (this.curPage > movePoint && this.curPage < this.totalPages - movePoint + 1) {
					left = this.showPages % 2 === 0 ? this.curPage - movePoint : this.curPage - movePoint + 1;
					right = this.curPage + movePoint - 1;
				} else if (this.curPage <= movePoint) {
					left = 1;
					right = this.showPages;
				} else {
					left = this.totalPages - this.showPages + 1;
					right = this.totalPages;
				}

				while (left <= right) {
					pages.push(left);
					left++;
				}
				return pages;
			}
		},
		methods: {
			controlPage (page) {
				if (page > this.totalPages) {
					return false;
				} else if (page < 1) {
					return false;
				}
				if (this.curPage !== page) {
					this.curPage = page;
				}
				this.$emit('sendPage',page)
			}
		}
	};
</script>

<style scoped>
	a{text-decoration: none}
	ul,li{margin:0;}
	.pagination{text-align:center;}
	.pagination li{list-style: none;display: inline-block;font-size:12px;}
	.nextPage,.lastPage,.page {
  	border: 1px solid #ddd;
    text-decoration: none;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.5;
    color: #337ab7;
    cursor: pointer
    }  
	.page{width:34px;height: 31.6px;box-sizing: border-box;text-align: center;padding: 0;line-height: 31px;font-size:12px;}
	.pagination li:hover{background-color: #eee;}

	.highLight{background: #eee}
	.darkLight{color: grey;cursor: default;}
</style>