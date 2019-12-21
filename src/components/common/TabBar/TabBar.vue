<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'TabBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
 .tabbar {
 	position: fixed;
 	left: 0;
 	right: 0;
 	bottom: 0;
 	display: flex;
 	height: 49px;
 	background-color:#fff;

 }
</style>