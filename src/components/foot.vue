<template>
   <div class="last_info">
	 <p class="l info">{{last}}项未选择</p>
	 <p class="l choose_btn" v-for="(filter,idx) in filters">
		<span :class="filter.isOn?'active':''" @click="changeFilter($event,idx)">{{filter.text}}</span>
	</p>
	<button class="del r" v-show="showDel" @click="del">删除选中项</button>
  </div>
</template>
<script>
  export default {
     data(){
	    return {
		  showDel:!1
		}
	 },
	 computed:{
	    last(){
		   let num = 0,
		       {todos} = this.$store.state
		   todos.map((todo)=>{
		      (!todo.selected) &&  num++
		   })
		   this.showDel = todos.length != num
		   return num
		},
		filters(){
		   let {filter} = this.$store.state
		   return  ["所有","未选","已选"].map((str,idx)=>{
		       return {
			      text:str,
				  isOn: filter == idx
			   }
		   })
		}
	 },
	 methods:{
	    changeFilter(e,idx){
		   if(!e.currentTarget.className) this.$store.dispatch('changeFilter',idx)
		},
		del(){
		   this.$store.dispatch('delSelected')
		}
	 }
  }
</script>
