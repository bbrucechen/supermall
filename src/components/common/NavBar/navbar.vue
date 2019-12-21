<template>
	<div class="navbar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>			
		</div>
	</div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	.navbar {
		height: 49px;
		width: 100%;
		display:flex;
		position:fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index:1000;
	}

	.navbar div {
		height: 44px;
	}
.left {
	  width: 60px;
}
.right {
	  width: 60px;
}
.center {
	flex:1;
}
</style>