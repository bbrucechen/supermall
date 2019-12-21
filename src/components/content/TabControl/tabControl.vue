<template>
	<div class="tabcontrol" ref="tabcontrol">
		<div v-for="(item,index) in titles" class="tabcontrolitem" @click="tabClick(index)" :class="{active:currentIndex === index}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'tabControl',
  props:{
  	titles:{
  		type:Array,
  		default() {
  			return []
  		}
  	},
    currentIndex:{
      type:Number
    }
  },

  data () {
    return {
    }
  },
  methods:{
    tabClick(index) {
      this.$emit('tabClick',index);
    },
  }
}
</script>

<style lang="css" scoped>
.tabcontrol {
	width: 100%;
	display:flex;
	padding:10px 0;
}
.tabcontrolitem {
	flex:1;
	text-align:center;
}
.tabcontrolitem span {
		padding-bottom:5px;
}
.active {
  color:red;
}
.active span {
  border-bottom:2px solid red;
}
</style>