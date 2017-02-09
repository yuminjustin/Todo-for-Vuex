<template>
  <div class="c addbox">
	<label>
	  <input type="checkbox" class="l db" @click="selectAll" :checked="isAllSelected"> 全选
	</label>
	<input ref="ipt" type="text" placeholder="输入需要添加的文字">
	<button @click="add">添加</button>
  </div>
</template>
<script>
  export default {
     computed:{
	    isAllSelected(){
		   let status = !0,
		       {todos} = this.$store.state
		   todos.map((todo)=>{
		      !todo.selected && (status = !1)
		   })
		   !todos.length && (status = !1)
		   return status
		}
	 },
	 methods:{
	   add(){
	      if(this.$refs.ipt.value) {
		    this.$store.dispatch("add",this.$refs.ipt.value)
			this.$refs.ipt.value = "" 
		  }
	   },
	   selectAll(e){
	      this.$store.dispatch("selectAll",e.currentTarget.checked)
	   }
	 }
  }
</script>
