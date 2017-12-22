<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'app',
  components: { navbar }
}
</script>

<style>
	body{
		background-color:#e1e1e1;
	}
	.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
	.clearfix{*+height:1%;}
</style>
