<template>
	<div class="check-button" :class="{check:checked}">
		<img src="~assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
export default {

  name: 'checkButton',

  data () {
    return {

    }
	},
	props:{
		checked:{
			type:Boolean,
			default:true
		}
	}
}
</script>

<style lang="css" scoped>
.check-button {
	background-color:#aaa;

	border-radius:50%;
	border:2px solid #aaa;
}
.check {
	border-color:#aaa;
	background-color:red;

}
</style>