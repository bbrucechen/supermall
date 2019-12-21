<template>
	<div class="tabbaritem" @click="itemClick" :class="{active:isActive}">
		<slot name="img"></slot>
		<slot name="title"></slot>
	</div>
</template>

<script>
export default {

  name: 'TabBarItem',

  data () {
    return {

    }
  },
  props:{
  	path:{
  		type:String
  	}
  },
  methods:{
  	itemClick() {
  		this.$router.replace(this.path)
  	}
  },
  computed:{
  	isActive() {
  		return this.$route.path.indexOf(this.path) !== -1;
  	}
  }
}
</script>

<style scoped>
	.tabbaritem {
		flex:1;
		display:flex;
		flex-direction:column;
		align-items:center;
		padding-top:3px;
	}

	.tabbaritem img {
		width: 24px;
		height: 24px;
		margin-bottom:3px;
	}

	.active {
		color:red;
	}

</style>